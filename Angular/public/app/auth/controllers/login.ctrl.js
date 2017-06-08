(function() {
	'use strict';

	angular
		.module('app')
		.controller('LoginCtrl', LoginCtrl);

	LoginCtrl.$inject = ['$scope', '$state', 'AuthService'];

	function LoginCtrl($scope, $state, AuthService) {
		$scope.login = login;

		function login() {
			AuthService.login($scope.email, $scope.password).then(function(data) {
				$state.go('resume', {id: data.uid});
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
})();