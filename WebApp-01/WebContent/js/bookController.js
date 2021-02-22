myApp.controller("bookController",function($scope, $http){
	
	$scope.uname = "Mahi";
	$scope.city = "Mumbai";
	$scope.msg = "welcome";
	//$scope.baseUrl = "http://dhakadinnovation.com:9040/v1";
	$scope.baseUrl = "http://localhost:9040/v1";
	$scope.color = ["red","green","yellow","blue"];
	
	$scope.resetForm = function(){
		$scope.bookId = "";
		$scope.bookName="";
		 $scope.bookDis="";
	};
	
	$scope.getBooks = function(){
		$http({
			method : 'GET',
			url : $scope.baseUrl+'/books/',
			headers: {
				 'X-Requested-With': 'XMLHttpRequest',
				   'Content-Type': 'application/json',
				   'Access-Control-Allow-Origin': '*',
				   'secure': false
				 }
		}).then(function(response){
			$scope.records = response.data;
			
		},function(response){
			$scope.error = response.data;
			alert("fails "+$scope.error)
		});
	}
	
	$scope.deleteBook = function(){
		$http({
			method : 'DELETE',
			url : $scope.baseUrl+'/books/'+$scope.dBookId,
			headers: {
				 'X-Requested-With': 'XMLHttpRequest',
				   'Content-Type': 'application/json',
				   'Access-Control-Allow-Origin': '*',
				   'secure': false
				 }
		}).then(function(response){
			//$scope.records = response.data;
			alert("book is deleted sucsessfully!! ")
		},function(response){
			$scope.error = response.data;
			alert("fails "+$scope.error)
		});
	}
	
	
	$scope.addBook = function(){
		$http({
			method : 'POST',
			url : $scope.baseUrl+'/books/',
			headers: {
				 'X-Requested-With': 'XMLHttpRequest',
				   'Content-Type': 'application/json',
				   'Access-Control-Allow-Origin': '*',
				   'secure': false
				 },
				 
		     data: { id: $scope.bookId, name : $scope.bookName, discription : $scope.bookDis}
				 
		}).then(function(response){
			$scope.records = response.data;
			alert("data post succsessfully !! ")
			$scope.resetForm();
		},function(response){
			$scope.error = response.data;
			alert("fails "+$scope.error)
		});
	}
	
	$scope.updateBook = function(){
		$http({
			method : 'PUT',
			url : $scope.baseUrl+'/books/'+$scope.bookId,
			headers: {
				 'X-Requested-With': 'XMLHttpRequest',
				   'Content-Type': 'application/json',
				   'Access-Control-Allow-Origin': '*',
				   'secure': false
				 },
				 
		     data: { id: $scope.bookId, name : $scope.bookName, discription : $scope.bookDis}
				 
		}).then(function(response){
			$scope.records = response.data;
			alert("data post succsessfully !! ")
			$scope.resetForm();
		},function(response){
			$scope.error = response.data;
			alert("fails "+$scope.error)
		});
	}
	
	
});