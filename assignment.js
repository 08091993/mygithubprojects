var app = angular.module('my_App', []);

app.controller('myCntrl', function ($scope,  $http, factoryServ) {
	

	$http.get('data.json').then(function(result) {
		$scope.datagiven = result.data;
	});



	$http({		'method' : 'GET', 	'url' : 'data.json'	}).then(function(result) {
			$scope.detailsObj = result.data;
		});
  
	$scope.display_details = function(value) {
		$scope.name = value.name;
		$scope.age = value.age;
		$scope.location = value.location;
		$scope.email = value.email;
		$scope.phone = value.phone;
		$scope.reverse = false;
		$scope.reverse =!$scope.reverse;
	};
	$scope.hide = function(){
	  $scope.reverse = false;
	}

});


app.factory('factoryServ', function() {
	var myVar = {};

	return myVar;
});
