(function() {
	'use strict';

	activate('experience');
	activate('education');

	/////////////////////

	function activate(section) {
		$('#'+section).append('<div class="row"><h1 class="text-center">'+section[0].toUpperCase() + section.slice(1, section.length)+'<button class="btn btn-default pull-right" id="edit-'+section+'">Edit</button></h1></div>');
		for(var s=0; s<resumeData[section].length; s++) {
			appendEntry(section, s);
		}
		bindEdit(section);
	}

	function bindAdd(section) {
		$('#add-'+section).click(function() {
			$.get('components/entries/entry.edit.html', function(data) {
				$($('#'+section).find('.row')[0]).after(data);
				bindRemove(section);
				bindRemoveDescription();
				bindAddDescription();
			});
		})
	}

	function bindAddDescription() {
		$('.add-description').unbind().click(function() {
			$($(this).parent()).append('<li><input type="text" class="form-control description" style="width: 90%; display: inline-block;" placeholder="Description"><span class="glyphicon glyphicon-remove remove-description"></span></li>');
			bindRemoveDescription();
		});
	}

	function appendEntry(section, s) {
		$.get('components/entries/entry.html', function(data) {
			var html = $.parseHTML(data);
			for(var p in resumeData[section][s]) {
				if(p==='descriptions') {
					for(var d=0; d<resumeData[section][s][p].length; d++) {
						$(html).find('.'+p).append('<li>'+resumeData[section][s][p][d]+'</li>');
					}
				} else {					
					$(html).find('.'+p).append(resumeData[section][s][p]);
				}
			}
			$('#'+section).append(html);
		});
	}

	function appendEditEntry(section, s) {
		$.get('components/entries/entry.edit.html', function(data) {
			var html = $.parseHTML(data);
			for(var p in resumeData[section][s]) {
				if(p==='descriptions') {
					for(var d=0; d<resumeData[section][s][p].length; d++) {
						$(html).find('.'+p).append('<li><input type="text" class="form-control description" style="width: 90%; display: inline-block;" value="'+resumeData[section][s][p][d]+'"><span class="glyphicon glyphicon-remove remove-description"></span></li>');
					}
				} else {					
					$(html).find('.'+p).val(resumeData[section][s][p]);
				}
				$($(html).find('.well')[0]).css('padding-bottom', '50px');
			}
			$('#'+section).append(html);
			bindRemove();			
			bindRemoveDescription();
			bindAddDescription();
		});
	}

	function bindEdit(section) {
		$('#edit-'+section).click(function() {
			$('#'+section).empty();
			$('#'+section).append('<div class="row"><h1 class="text-center">'+section[0].toUpperCase()+section.slice(1, section.length)+'<button class="btn btn-success pull-right" id="save-'+section+'">Save</button><button class="btn btn-primary pull-right" id="add-'+section+'">Add</button></h1></div>');
			for(var s=0; s<resumeData[section].length; s++) {
				appendEditEntry(section, s);
			}
			bindAdd(section);
			bindSave(section);		
		});
	}

	function bindRemove() {
		$('.remove-entry').click(function() {
			$($($(this).parent()).parent()).remove();
		});
	}

	function bindSave(section) {
		$('#save-'+section).click(function() {
			var entries = $('#'+section).find('.entry');
			var entriesArray = [];
			for(var e=0; e<entries.length; e++) {
				var currEntry = $(entries[e]);
				var entry = {
					title: $(currEntry.find('.title')[0]).val(),
					dates: $(currEntry.find('.dates')[0]).val(),
					organization: $(currEntry.find('.organization')[0]).val(),
					descriptions: [],
				}
				var descriptions = $(entries[e]).find('.descriptions');
				for(var d=0; d<$(descriptions).children().length; d++) {
					var description = $($($(descriptions).children()[d]).find('.description')[0]).val();
					entry.descriptions.push(description);
				}
				entriesArray.push(entry);
			}
			resumeData[section] = entriesArray;
			$('#'+section).empty();
			activate(section);
		});
	}

	function bindRemoveDescription() {
		$('.remove-description').css('cursor', 'pointer');
		$('.remove-description').click(function() {
			$($(this).parent()).remove();
		});
	}
})();