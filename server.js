var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var todo = require('./todoModel.js');

mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ToDo');

app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 
app.post('/todos', function(req, res){
  var todoItem = new todo(req.body);

  todoItem.save(function(err, todoItem){
    console.log("Error: "+err);
    console.log("Yay"+todoItem);
    res.send(todoItem);
  });
});

app.listen(3000);
//