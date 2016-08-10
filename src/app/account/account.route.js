'use strict';
angular.module('nodeInAction')
.config(function ($stateProvider) {
	$stateProvider
	.state('account', {
		url: '/account',
		abstract: true,
		templateUrl: 'app/account/account.html'
	})
	.state('account.login', {
		url: '/login',
		templateUrl: 'app/account/login.html',
		controller: 'LoginCtrl as vm'
	})
	.state('account.register', {
		url: '/register',
		templateUrl: 'app/account/register.html'
	})
});