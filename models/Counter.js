const mongoose = require('mongoose');
const CounterSchema = mongoose.Schema({
  value: {
    type: Number
  }
});
console.log(123);
module.exports = mongoose.model('counter', CounterSchema);
