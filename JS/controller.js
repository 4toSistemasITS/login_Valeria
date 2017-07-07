'use strict';
var app = angular.module('myApp', ['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	// principal login
	.state('login',{
		url:'/login',
		templateUrl:'vistas/login.html',
		controller:'vistaPrincipal'
	})
	$urlRouterProvider.otherwise('/login');
});
app.controller('validateCtrl', function($scope) {
    $scope.user = 'Valeria';
    $scope.psw = '1993';
});
app.controller('vistaPrincipal',function($scope){

});
app.controller('vistaLista',function($scope){
	var paises=[
	{nombre:'Kevin',edad:21,ciudad:'Catamayo'},
	{nombre:'Favian',edad:24,ciudad:'Loja'},
	{nombre:'Joselyn',edad:21,ciudad:'Catamayo'},
	{nombre:'Kathya',edad:19,ciudad:'Loja'},
	{nombre:'Valeria',edad:23,ciudad:'Catamayo'}];
	$scope.data2=paises;
});