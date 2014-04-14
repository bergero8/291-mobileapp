var Cloud = require("ti.cloud");

$.btnSubmit.addEventListener("click", function() {
	Cloud.Users.create({

		username: $.txtName.value,
		password: $.txtPassword.value,
		password_confirmation: $.txtPassword.value,
		goal: $.txtGoal1.value
	}, function(e) {
		if(e.success) {
			var user = e.users[0];
			alert('Success:\n' +
				'id: ' + user.id + '\n' +
				'sessionId: ' + Cloud.sessionId + '\n' +
				'first name: ' + user.first_name + '\n');
			APP.addChild('categories');
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
});

var APP = require("core");
var CONFIG = arguments[0];
$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
$.NavigationBar.showBack(function(_event) {
	APP.removeChild();
});

/*$.btnSubmit.addEventListener('click', function(e) {
	APP.addChild('categories');

});*/