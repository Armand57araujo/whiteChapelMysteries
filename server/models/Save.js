const { Schema, model } = require('mongoose');
const itemSchema = require('./Item');

const saveSchema = new Schema({
  inventory: [itemSchema],
  notes: {
    type: String,
    default: '',
  }
});

const Save = model('Save', saveSchema);

module.exports = Save;