(function() {
	'use strict';

	angular
		.module('app')
		.controller('EducationCtrl', EducationCtrl);

	EducationCtrl.$inject = ['$scope', 'ResumeService'];

	function EducationCtrl($scope, ResumeService) {
		$scope.education = {data: {}, isEditing: false};

		$scope.addDescription = addDescription;
		$scope.addEducation = addEducation;
		$scope.editEducation = editEducation;
		$scope.removeDescription = removeDescription;
		$scope.removeEducation = removeEducation;
		$scope.saveEducation = saveEducation;

		activate();

		//////////////////////

		function activate() {
			$scope.education.data = ResumeService.getEducation();
		}

		function addDescription(education) {
			var expIndex = getEducationIndex(education);
			if(expIndex > -1) $scope.education.data[expIndex].descriptions.push({id: Math.random()*100000, value: ''});
		}

		function addEducation() {
			$scope.education.data.push({title: '', dates: '', organization: '', descriptions: []});
		}

		function editEducation() {
			$scope.education.isEditing = true;
		}

		function removeDescription(education, description) {
			var expIndex = getEducationIndex(education);
			console.log(expIndex);
			if(expIndex > -1) {
				var descriptions = $scope.education.data[expIndex].descriptions;
				var index = -1;
				for(var d=0; d<descriptions.length; d++) {
					if(descriptions[d].id === description.id) index = d;
				}
				console.log(expIndex, index);
				if(index > -1) $scope.education.data[expIndex].descriptions.splice(index, 1);
			}
		}

		function removeEducation(education) {
			var expIndex = getEducationIndex(education);
			if(expIndex > -1) $scope.education.data.splice(expIndex, 1);
		}

		function saveEducation() {			
			ResumeService.setEducation($scope.education);
			$scope.education.isEditing = false;
		}

		function getEducationIndex(education) {			
			var index = -1;
			for(var e=0; e<$scope.education.data.length; e++) {
				if($scope.education.data[e].title === education.title) index = e;
			}
			return index;
		}
	}
})();