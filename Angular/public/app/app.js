(function() {
	'use strict';

	var config = {
		apiKey: "AIzaSyCtxqPiD_vVPsR6wPiYTXzau_zIDc5JIUU",
		authDomain: "example-fe023.firebaseapp.com",
		databaseURL: "https://example-fe023.firebaseio.com",
		projectId: "example-fe023",
		storageBucket: "example-fe023.appspot.com",
		messagingSenderId: "39029456706"
		};
	firebase.initializeApp(config);

	angular
		.module('app', ['ui.router', 'firebase']);
})();