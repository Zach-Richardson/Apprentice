(function() {
	'use strict';

	angular
		.module('app')
		.controller('ContactCtrl', ContactCtrl);

	ContactCtrl.$inject = ['$scope'];

	function ContactCtrl($scope) {
		$scope.contact;
		$scope.submitContact = submitContact;

		function submitContact() {
			console.log('First Name:', $scope.contact.firstName);
			console.log('Last Name:', $scope.contact.lastName);
			console.log('Email:', $scope.contact.email);
			console.log('Phone:', $scope.contact.phone);
			console.log('Message:', $scope.contact.message);
		}
	}
})();