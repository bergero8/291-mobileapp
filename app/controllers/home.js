var Cloud = require("ti.cloud");

var APP = require("core");
var CONFIG = arguments[0];
$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
$.NavigationBar.showMenu();

/*
 * Facebook login
 
var fb = require('facebook');
fb.appid = FACEBOOK_APP_ID;
fb.permissions = [FACEBOOK_APP_PERMISSIONS];
fb.authorize();*/

/*$.setup.addEventListener("click", function() {
	APP.addChild("setup");
});*/

var newUser = Ti.UI.createLabel({
	text: 'Create new user? Click here!'
});

newUser.addEventListener('click', function(e) {
	APP.addChild("setup");
});

$.bottomView.add(newUser);

$.btnLogin.addEventListener("click", function() {
	Cloud.Users.login({
		login: $.txtName.value,
		password: $.password.value
	}, function(e) {
		if(e.success) {
			var user = e.users[0];
			/*alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n');// +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
            Ti.App.Properties.setString("sessionId", Cloud.sessionId);
            var index = Alloy.createController('index').getView();*/

			APP.addChild('questions');

		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
});