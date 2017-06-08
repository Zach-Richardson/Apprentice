(function() {
	'use strict';

	angular
		.module('app')
		.controller('ExperienceCtrl', ExperienceCtrl);

	ExperienceCtrl.$inject = ['$scope', 'ResumeService'];

	function ExperienceCtrl($scope, ResumeService) {
		$scope.experience = {data: {}, isEditing: false};

		$scope.addDescription = addDescription;
		$scope.addExperience = addExperience;
		$scope.editExperience = editExperience;
		$scope.removeDescription = removeDescription;
		$scope.removeExperience = removeExperience;
		$scope.saveExperience = saveExperience;

		activate();

		//////////////////////

		function activate() {
			$scope.experience.data = ResumeService.getExperience();
		}

		function addDescription(experience) {
			var expIndex = getExperienceIndex(experience);
			if(expIndex > -1) $scope.experience.data[expIndex].descriptions.push({id: Math.random()*100000, value: ''});
		}

		function addExperience() {
			$scope.experience.data.push({title: '', dates: '', organization: '', descriptions: []});
		}

		function editExperience() {
			$scope.experience.isEditing = true;
		}

		function removeDescription(experience, description) {
			var expIndex = getExperienceIndex(experience);
			console.log(expIndex);
			if(expIndex > -1) {
				var descriptions = $scope.experience.data[expIndex].descriptions;
				var index = -1;
				for(var d=0; d<descriptions.length; d++) {
					if(descriptions[d].id === description.id) index = d;
				}
				console.log(expIndex, index);
				if(index > -1) $scope.experience.data[expIndex].descriptions.splice(index, 1);
			}
		}

		function removeExperience(experience) {
			var expIndex = getExperienceIndex(experience);
			if(expIndex > -1) $scope.experience.data.splice(expIndex, 1);
		}

		function saveExperience() {			
			ResumeService.setExperience($scope.experience);
			$scope.experience.isEditing = false;
		}

		function getExperienceIndex(experience) {			
			var index = -1;
			for(var e=0; e<$scope.experience.data.length; e++) {
				if($scope.experience.data[e].title === experience.title) index = e;
			}
			return index;
		}
	}
})();