(function() {
	'use strict';

	activate();

	function activate() {
		$.get('components/skills/skills.html', function(data) {
			$('#skills').append(data);
			for(var s=0; s<resumeData.skills.length; s++) {
				$('#skills-list').append('<li>'+resumeData.skills[s].name+'<span class="badge">'+resumeData.skills[s].years+'</span></li>');
				if((s+1)%3===0) {
					$('#skills-list').append('<br>');
				}

			}
			bindEdit();
		});
	}

	function bindEdit() {
		$('#edit-skills').click(function() {
			$('#skills-list').empty();
			for(var s=0; s<resumeData.skills.length; s++) {
				$('#skills-list').append(
					'<li><div class="form-group"><input type="text" class="form-control" value="'+resumeData.skills[s].name+'">'+
					'<input type="text" class="form-control" value="'+resumeData.skills[s].years+'">'+
					'<span class="glyphicon glyphicon-remove remove-skill"></span></div></li>');			}
			$('#edit-skills').remove();
			$('#skills').find('h1').append('<button class="btn btn-success pull-right" id="save-skills">Save</button><button class="btn btn-primary pull-right" id="add-skill">Add</button>')
			bindAdd();
			bindRemove();
			bindSave();
		});
	}

	function bindSave() {
		$('#save-skills').click(function() {
			var skills = $('#skills-list').children();
			var skillsArray = [];
			for(var s=0; s<skills.length; s++) {
				var formGroup = $($(skills[s]).children()[0]);
				var skill = {
					name: $(formGroup.children()[0]).val(),
					years: $(formGroup.children()[1]).val()
				}
				skillsArray.push(skill);
			}
			resumeData.skills = skillsArray;
			$('#skills').empty();
			activate();
		});
	}

	function bindAdd() {
		$('#add-skill').click(function() {
			$('#skills-list').append(
					'<li><div class="form-group"><input type="text" class="form-control" placeholder="Name">'+
					'<input type="text" class="form-control" placeholder="Years">'+
					'<span class="glyphicon glyphicon-remove remove-skill"></span></div></li>')
			bindRemove();
		});
	}

	function bindRemove() {
		$('.remove-skill').css('color', 'white');	
		$('.remove-skill').css('cursor', 'pointer');
		$('.remove-skill').click(function() {
			$($($(this).parent()).parent()).remove();
		});
	}
})();