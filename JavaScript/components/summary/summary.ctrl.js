(function() {
	'use strict';

	activate();

	function activate() {
		$.get('components/summary/summary.html', function(data) {
			$('#summary').append(data);
			for(var s in resumeData.summary) {
				if(s ==="profile") 
					$('#'+s).attr('src', resumeData.summary[s]);
				else 
					$('#'+s).append(resumeData.summary[s]);
			}
			bindEdit();
		});
	}

	function bindEdit() {
		$('#edit-summary').click(function() {
			$('#summary').empty();
			$.get('components/summary/summary.edit.html', function(data) {	
				$('#summary').append(data);		
				for(var s in resumeData.summary) {
					$('#'+s).val(resumeData.summary[s]);
				}
				bindSave();
			});
		});
	}

	function bindSave() {
		$('#save-summary').click(function() {
			for(var s in resumeData.summary) {
				resumeData.summary[s] = $('#'+s).val();
			}
			$('#summary').empty();
			activate();
		});
	}
})();