app.controller("todoController", function($scope, todoService, $http){

  $scope.todoArray = todoService;

   $http.get('/beer').success(function(){
    // $scope.beers = data;
    console.log('Hi there I am the client http get function');
  });
 
  $scope.addToArray = function(){
    $scope.todoArray.push({task: $scope.inputToAddToArray, done:false});
    $scope.inputToAddToArray = '';

    $http.post('/beer').success(function () {
      console.log('got back from the server, I am the client side post function');
      // $scope.beers.push(response.data);
      // console.log(response);
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