app.controller("todoController", function($scope, todoService, $http){

  $scope.todoArray = todoService;

  // if upon client get (read) request
  //  $http.get('/beer').success(function(data){
  //   // $scope.beers = data;
  //   console.log('Hi there I am the client http get route');
  // });
 
  $scope.addToArray = function(){
    var todo = {task: $scope.inputToAddToArray, done:false};
    // $scope.todoArray.push(todo);
    $scope.inputToAddToArray = '';

    $http.post('/todos', todo).then(function (response) {
      $scope.todoArray.push(response.data);
    });
  };

  $scope.removeFromArray = function($index){
    $scope.todoArray.splice($index,1);
  };

  $scope.done = function(index){
    $scope.todoArray[index].done = true;
  };

  $scope.strike = function(index){
    if ($scope.todoArray[index].done) {
      return {"text-decoration": "line-through"};
    }
  };

});