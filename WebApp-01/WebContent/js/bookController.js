myApp.controller("bookController",function($scope, $http){
	
	$scope.uname = "Mahi";
	$scope.city = "Mumbai";
	$scope.msg = "welcome";
	$scope.color = ["red","green","yellow","blue"];
	
	$scope.resetForm = function(){
		$scope.bookId = "";
		$scope.bookName="";
		 $scope.bookDis="";
	};
	
	$scope.getBooks = function(){
		$http({
			method : 'GET',
			url : 'http://localhost:8080/books/',
			headers: {
				 'X-Requested-With': 'XMLHttpRequest',
				   'Content-Type': 'text/plain',
				   'Access-Control-Allow-Origin': '*'
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
			url : 'http://localhost:8080/books/'+$scope.dBookId,
			headers: {
				 'X-Requested-With': 'XMLHttpRequest',
				   'Content-Type': 'text/plain',
				   'Access-Control-Allow-Origin': '*'
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
			url : 'http://localhost:8080/books/',
			headers: {
				 'X-Requested-With': 'XMLHttpRequest',
				   'Content-Type': 'application/json',
				   'Access-Control-Allow-Origin': '*'
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
			url : 'http://localhost:8080/books/'+$scope.bookId,
			headers: {
				 'X-Requested-With': 'XMLHttpRequest',
				   'Content-Type': 'application/json',
				   'Access-Control-Allow-Origin': '*'
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