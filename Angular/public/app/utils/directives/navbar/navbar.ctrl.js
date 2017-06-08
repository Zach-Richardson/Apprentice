(function() {
	'use strict';

	angular
		.module('app')
		.controller('NavbarCtrl', NavbarCtrl);

	NavbarCtrl.$inject = ['$scope', 'AuthService'];

	function NavbarCtrl($scope, AuthService) {
		activate();

		///////////////////

		function activate() {
			return;
		}
	}
})();