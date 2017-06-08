(function() {
	'use strict';

	angular
		.module('app')
		.factory('ResumeService', ResumeService);

	ResumeService.$inject = [];

	function ResumeService() {
		var resume = initResume();

		var service = {
			getSummary: function() {return resume.summary;},
			setSummary: function(summary) {resume.summary = summary;},
			getSkills: function() {return resume.skills;},
			setSkills: function(skills) {resume.skills = skills},
			getExperience: function() {return resume.experience;},
			setExperience: function(experience){resume.experience = experience;},
			getEducation: function() {return resume.education;},
			setEducation: function(education) {resume.education = education;}
		};

		return service;

		////////////////////////

		function initResume() {
			return {
				summary: {
					background: 'https://storage.googleapis.com/idx-acnt-gs.ihouseprd.com/AR688778/site/banner_image_original_1438092449.jpg',
					profile: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAsAAAAAJDJlZjc5MGY5LTMyOGMtNGQ4NC04YjlhLTI4Mzc2OTA0MTY1Yg.jpg',
					name: 'Zach Richardson',
					occupation: 'Software Engineer',
					location: 'Boise, ID',
					phone: '(303) 867-5309',
					email: 'zach@tyrocoders.com'
				},
				skills: [
					{name: 'Java', years: 4},
					{name: 'JavaScript', years: 4},
					{name: 'Python', years: 4},
					{name: 'Dad Jokes', years: 20},
					{name: 'Movie Quotes', years: 20},
					{name: 'Goofiness', years: 20},
					{name: 'Accounting', years: 4},
					{name: 'Finance', years: 4},
					{name: 'Other Business Shinanigans', years: 4}
				],
				experience: [
					{
						title: 'Undisclosed',
						dates: '2000 - 2014',
						organization: 'Goliath National Bank',
						descriptions: [
							{id:1, value: 'Signed a bunch of documents that authorized illegal deals.'},
							{id:2, value: 'Successfully managed the chain - no, circle - of screaming.'}
						]
					},
					{
						title: 'Anchorman',
						dates: '1971 - 1979',
						organization: 'Channel 4 News',
						descriptions: [
							{id: 1, value: 'Escaped a glass cage of emotion.'},
							{id: 2, value: 'Facilitated negotiations between a bear and a dog.'}
						],
					},
					{
						title: 'Paleontologist',
						dates: '1994 - 2004',
						organization: 'New York Museum of Prehistoric History',
						descriptions: [
							{id: 1, value: 'Cared for a white-headed capuchin monkey, named Marcel.'},
							{id: 2, value: 'Posed for a class of grade school children in one of the exhibitions.'}
						]
					}
				],
				education: [
					{
						title: 'Ph.D Reality',
						dates: '2006 - 2014',
						organization: 'School of Hard Knocks',
						descriptions: [
							{id: 1, value: 'Completed dissertation work on how unfair life is.'},
							{id: 2, value: 'Published article in research journal that disproved theory that the origin of money is trees.'}
						]
					},
					{
						title: "Not the Teacher's Pet",
						dates: '2002 - 2006',
						organization: 'School of Rock',
						descriptions: [
							{id: 1, value: 'Stuck it to the man!'}
						]
					}
				]
			};
		}
	}
})();