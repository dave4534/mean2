var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  task: String,
  done: Boolean
});

var todoItem = mongoose.model('todoItem', todoSchema);
module.exports = todoItem;
//