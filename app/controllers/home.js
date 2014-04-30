/**
 * Controller for the text screen
 *
 * @class Controllers.text
 * @uses core
 */
var APP = require("core");
var Cloud = require("ti.cloud");

var CONFIG = arguments[0];

APP.log("debug", "text | " + JSON.stringify(CONFIG));

$.heading.text = CONFIG.heading;
$.heading.color = APP.Settings.colors.hsb.primary.b > 70 ? "#000" : APP.Settings.colors.primary;
$.text.text = CONFIG.text;

$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);

if(CONFIG.isChild === true) {
	$.NavigationBar.showBack(function(_event) {
		APP.removeChild();
	});
} else {
	if(APP.Settings.useSlideMenu) {
		$.NavigationBar.showMenu(function(_event) {
			APP.toggleMenu();
		});
	} else {
		$.NavigationBar.showSettings(function(_event) {

			APP.openSettings();
		});
	}
}

$.btnLogin.addEventListener('click', function() {
	Cloud.Users.login({
		login: $.txtUser.value,
		password: $.txtPass.value
	}, function(e) {
		if(e.success) {
			var user = e.users[0];
			alert('Success:\n' +
				'id: ' + user.id + '\n' +
				'sessionId: ' + Cloud.sessionId + '\n' +
				'first name: ' + user.first_name + '\n' +
				'last name: ' + user.last_name);
			$.txtUser.setVisible(false);
			$.txtPass.setVisible(false);
			$.btnLogin.setVisible(false);
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});

});