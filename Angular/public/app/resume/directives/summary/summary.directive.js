(function() {
	'use strict';

	angular
		.module('app')
		.directive('summary', summary);

	summary.$inject = [];

	function summary() {
		return {
			replace: true,
			restrict: 'EA',
			templateUrl: 'app/resume/directives/summary/summary.tpl.html',
			controller: 'SummaryCtrl'
		}
	}
})();