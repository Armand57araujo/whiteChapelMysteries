const { Schema, model } = require('mongoose');

const saveSchema = new Schema({
  inventory: [
    {
      type: String,
      default: []
    }
  ],
  notes: {
    type: String,
    default: '',
  }
});

const Save = model('Save', saveSchema);

model.exports = Save;