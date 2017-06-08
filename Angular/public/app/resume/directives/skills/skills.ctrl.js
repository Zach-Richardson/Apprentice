(function() {
	'use strict';

	angular
		.module('app')
		.controller('SkillsCtrl', SkillsCtrl);

	SkillsCtrl.$inject = ['$scope', '$stateParams', '$firebaseArray', 'ResumeService'];

	function SkillsCtrl($scope, $stateParams, $firebaseArray, ResumeService) {
		$scope.skills;
		$scope.isEditingSkills = false;
		$scope.addSkill = addSkill;
		$scope.editSkills = editSkills;
		$scope.removeSkill = removeSkill;
		$scope.saveSkills = saveSkills;

		activate();

		function activate() {
			var ref = firebase.database().ref();
			$scope.skills = $firebaseArray(ref.child($stateParams.id).child('skills'));
		}

		function addSkill() {
			$scope.skills.$add({name: '', years: ''});
		}

		function editSkills() {
			$scope.isEditingSkills = true;
		}

		function removeSkill(skill) {
			$scope.skills.$remove(skill);
		}

		function saveSkills() {
			for(var s=0; s<$scope.skills.length; s++) {
				$scope.skills.$save($scope.skills[s]);
			}
			$scope.isEditingSkills = false;
		}
	}
})();