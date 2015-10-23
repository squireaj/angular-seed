'use strict';

angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])





.controller('View1Ctrl', function($scope) {
	$scope.dayOfTheWeek = 'Friday';

	$scope.daysInAMonth = function(month){
		if(month.toLowerCase() === 'january'){
			return 31
		}else if(month.toLowerCase() === 'february'){
			return 28
		}else if(month.toLowerCase()=== 'march'){
			return 31
		}
	}

});

