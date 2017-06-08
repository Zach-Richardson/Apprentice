(function() {
	'use strict';

	angular
		.module('app')
		.controller('SummaryCtrl', SummaryCtrl);

	SummaryCtrl.$inject = ['$scope', '$stateParams', '$firebaseObject', 'ResumeService'];

	function SummaryCtrl($scope, $stateParams, $firebaseObject, ResumeService) {
		$scope.summary;
		$scope.editSummary = editSummary;
		$scope.saveSummary = saveSummary;

		activate();

		function activate() {
			var ref = firebase.database().ref();
			$scope.summary = $firebaseObject(ref.child($stateParams.id).child('summary'));
			$scope.summary.$loaded().then(function(data) {				
				$('#summary').css('background-image', 'url("'+data.data.background+'")');
				$('#profile').attr('src', data.data.profile);
			}).catch(function(error) {
				console.log(error);
			});
		}

		function editSummary() {
			$scope.summary.isEditing = true;
		}

		function saveSummary() {
			console.log($scope.summary);
			$scope.summary.$save().then(function(data) {
				console.log(data);
				$('#summary').css('background-image', 'url("'+data.data.background+'")');
				$('#profile').attr('src', data.data.profile);
			}).catch(function(error) {
				console.log(error);
			});
			$scope.summary.isEditing = false;
		}
	}
})();