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