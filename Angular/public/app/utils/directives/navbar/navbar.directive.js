(function() {
	'use strict';

	angular
		.module('app')
		.directive('navbar', navbar);

	navbar.$inject = [];

	function navbar() {
		var directive = {
			replace: true,
			restrict: 'EA',
			templateUrl: 'app/utils/directives/navbar/navbar.tpl.html',
			controller: 'NavbarCtrl'
		};

		return directive;
	}
})();