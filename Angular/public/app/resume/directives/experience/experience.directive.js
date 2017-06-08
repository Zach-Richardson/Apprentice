(function() {
	'use strict';

	angular
		.module('app')
		.directive('experience', experience);

	experience.$inject = [];

	function experience() {
		return {
			replace: true,
			restrict: 'EA',
			templateUrl: 'app/resume/directives/experience/experience.tpl.html',
			controller: 'ExperienceCtrl'
		}
	}
})();