const { User, Save } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    save: async (parent, args, context) => {
      if(context.user) {
        return Save.findOne({ _id: args._id });
      }
      throw AuthenticationError;
    },
    me: async (parent, args, context) => {
      if(context.user) {
        return User.findOne({ _id: context.user._id });
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
      const user = await User.create({ email, password});

      if(!user) {
        throw AuthenticationError;
      }

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
    updateSave: async (parent, args, context) => {
      if(context.user) {
        const save = await Save.findOneAndUpdate(
          {_id: args._id },
          { notes: args.notes, inventory: args.inventory},
          { new: true });
      }
      throw AuthenticationError;
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
    removeSave: async(parent, args, context) => {
      if(context.user) {
        const save = await Save.findOneAndDelete({_id: args._id});

        if(!save) {
          throw AuthenticationError;
        }
        
        return save;
      }
    }
  }
}

module.exports = resolvers;