(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider) {
		$stateProvider
			.state('resume', {
				url: '/resume/{id}',
				template: '<summary></summary><skills></skills><experience></experience><education></education><contact></contact>'
			});
	}
})();