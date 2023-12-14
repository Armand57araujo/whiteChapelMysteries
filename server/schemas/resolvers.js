const { User, Save } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    save: async (parent, args, context) => {
      
      if(context.user) {
        const user = await User.findOne({_id:context.user._id})
        return await Save.findOne({ _id: user.currentSave }).populate('inventory');
      }
      throw AuthenticationError;
    },
    me: async (parent, args, context) => {
      if(context.user) {
        return await User.findOne({ _id: context.user._id }).populate('saves');
      }
      throw AuthenticationError;
    }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if(!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { email, password }) => {
      let user = await User.create({ email, password});
      if(!user) {
        throw AuthenticationError;
      }
      const save = await Save.create({});
      await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { saves: save }},
        { new: true }
      );

      user = await  User.findOneAndUpdate(
        {_id: user._id},
        { currentSave: save._id},
        { new: true }
      );
      console.log('addUser', user);
      const token = signToken(user);

      return { token, user };
    },
    addSave: async (parent, args, context) => {
      if(context.user) {
        const save = await Save.create({});
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { saves: save }},
          { new: true }
        );

        return save;
      }
      throw AuthenticationError;
    },
    updateSave: async (parent, {notes, inventory}, context) => {
      console.log('user', context.user);
      console.log('notes', notes);
      console.log('inventory', inventory);
      if(context.user) {
        let save = await Save.findOneAndUpdate(
          {_id: context.user.currentSave},
          { notes: notes},
          { new: true }
          );
        save = await Save.findOneAndUpdate(
          {_id: context.user.currentSave},
          { inventory: JSON.parse(inventory)},
          { new: true }
        )
        if(!save) {
          throw AuthenticationError;
        }
        return save;
      }
    },
    addItem: async (parent, args, context) => {
      if(context.user) {
        return Save.findOneAndUpdate(
          {_id: args._id},
          {
            $addToSet: { inventory: {itemName: args.itemName, description: args.description }}
          },
          { new: true }
        );
      }
    },
    removeSave: async(parent, {location}, context) => {
      if(context.user) {
        const save = await Save.findOneAndDelete({_id: context.user.saves[location]});
        if(!save) {
          throw AuthenticationError;
        }
        
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { saves: { _id: context.user.saves[location]}}}).populate('saves');
        if(!user) {
          throw AuthenticationError;
        }
        const token = signToken(user);
        return { token, user };
      }
    },
    setCurrentSave: async(parent, { location }, context) => {
      if(context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { currentSave: context.user.saves[location] },
          { new: true }).populate('saves')
        if(!user) {
          throw AuthenticationError;
        }
        const token = signToken(user);
        return { token, user };
      }
    }
  }
}

module.exports = resolvers;