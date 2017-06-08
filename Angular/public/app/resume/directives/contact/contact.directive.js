(function() {
	'use strict';

	angular
		.module('app')
		.directive('contact', contact);

	contact.$inject = [];

	function contact() {
		return {
			replace: true,
			restrict: 'EA',
			templateUrl: 'app/resume/directives/contact/contact.tpl.html',
			controller: 'ContactCtrl'
		};
	}
})();