var APP = require("core");
var CONFIG = arguments[0];
$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
$.NavigationBar.showBack(function(_event) {
	APP.removeChild();
});