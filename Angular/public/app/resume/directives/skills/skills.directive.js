(function() {
	'use strict';

	angular
		.module('app')
		.directive('skills', skills);

	skills.$inject = [];

	function skills() {
		return {
			replace: true,
			restrict: 'EA',
			templateUrl: 'app/resume/directives/skills/skills.tpl.html',
			controller: 'SkillsCtrl'
		}
	}
})();