var app=angular.module('myApp',[]);
app.controller('myCtrl',function($rootScope,$scope){
	$scope.title="Geetha";
	$scope.distinations=[];
	$scope.newDistination={
		city:undefined,
		country:undefined
	};
	$scope.addDistination=function()
	{
		$scope.distinations.push(
				{
					city:$scope.newDistination.city,
					country:$scope.newDistination.country
				}
		);
	}
});