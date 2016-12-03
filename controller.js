app.controller("todoController", function($scope, todoService){
  $scope.todoArray = todoService;
 
  $scope.addToArray = function(){
    $scope.todoArray.push({task: $scope.inputToAddToArray, done:false});
    $scope.inputToAddToArray = '';
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