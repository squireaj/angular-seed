'use strict';


describe('View1Ctrl', function(){
	beforeEach(module('myApp'));
	var scope;
	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		$controller('View1Ctrl', {
			$scope: scope
		});
	}));

	it('the starting day of the week should be Friday', function(){
		expect(scope.dayOfTheWeek).toBe("Friday")
	});

	it('Days in a Month', function(){
		expect(scope.daysInAMonth('January')).toBe(31)
		expect(scope.daysInAMonth('january')).toBe(31)
		expect(scope.daysInAMonth('February')).toBe(28)
		expect(scope.daysInAMonth('february')).toBe(28)
	}) 

});