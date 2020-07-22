myApp.controller("firstController",function($scope){
	
	$scope.uname = "Mahi";
	$scope.city = "Mumbai";
	$scope.msg = "welcome";
	$scope.color = ["red","green","yellow","blue"];
	$scope.test = function(){
		return  "Name : "+ $scope.uname +"City : "+ $scope.city ;
	};
	$scope.add = function(a,b){
		return  a+b;
	};
	
});