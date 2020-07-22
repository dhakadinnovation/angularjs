var testApp = angular.module("testApp", []);

testApp.controller("testController", function($scope, $http) {
  $scope.home = "This is the homepage";

  $scope.getRequest = function() {
    console.log("I've been pressed!");
    $http.get("http://localhost:8080/books/").then(
      function successCallback(response) {
        $scope.response = response;
        console.log("response : "+response);
        alert("response : "+response)
      },
      function errorCallback(response) {
        console.log("Unable to perform get request");
        alert("Unable to perform get request")
      }
    );
  };
  
  //    Our POST request function
  $scope.postRequest = function() {
    $http.post("http://urlforapi.com/", data).then(
      function successCallback(response) {
        console.log("Successfully POST-ed data");
      },
      function errorCallback(response) {
        console.log("POST-ing of data failed");
      }
    );
  };
});