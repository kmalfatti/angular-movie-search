
app.controller('MovieController', function($scope, $http, $location){

  $scope.getMovies = function(){
    $http.get('http://www.omdbapi.com/?s=' + $scope.data).then(function(res){
      $scope.movies = res.data.Search;
      $location.path('/')
    });
  }
});

app.controller('showController', function($scope, $http, $routeParams){
  console.log($routeParams)
  $http.get('http://www.omdbapi.com/?i=' + $routeParams.id).then(function(res){
    $scope.movie = res.data;
  })
});