(function() {
	'use strict';

	angular
		.module('app')
		.directive('education', education);

	education.$inject = [];

	function education() {
		return {
			replace: true,
			restrict: 'EA',
			templateUrl: 'app/resume/directives/education/education.tpl.html',
			controller: 'EducationCtrl'
		}
	}
})();