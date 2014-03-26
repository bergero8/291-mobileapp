var APP = require("core");
var CONFIG = arguments[0];
$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);

$.setup.addEventListener("click", function() {
	APP.addChild("setup");
});