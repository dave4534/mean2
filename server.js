var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));


// app.post('/beer', function(req, res){
//   res.send('This is the server side send function');
// });

// app.get('/beer', function(req, res){
//   res.send('Hello I am the server side get function');
// });

app.listen(3000);