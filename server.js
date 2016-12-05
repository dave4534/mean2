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

// 1. Create/Post request todoItems from server via req.body
app.post('/todos', function(req, res){
  var todoItem = new todo(req.body);
  // Save the todoItems and send them to client?
  todoItem.save(function(err, todoItem){
    console.log("Error: "+err);
    console.log("Yay"+todoItem);
    res.send(todoItem);
  });

  app.get('/todos', function(req, res){
  todoItem.find(function(error, beers){
    res.send(todo);
    });
  });

});

app.listen(3000);
//