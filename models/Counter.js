const mongoose = require('mongoose');
const CounterSchema = mongoose.Schema({
  value: {
    type: Number
  }
});

module.exports = mongoose.model('counter', CounterSchema);
