	/**
	 * 
	 * @class Controllers.settings
	 * @uses core
	 */
	var APP = require("core");

	/**
	 * Initializes the controller
	 */
	$.init = function() {
		APP.log("debug", "Progress.init");

		$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);

		if(APP.Settings.useSlideMenu) {
			$.NavigationBar.showMenu(function(_event) {
				APP.toggleMenu();
			});
		} else {
			$.NavigationBar.showBack(function(_event) {
				APP.removeChild(true);
			});
		}
	};

	// Kick off the init
	$.init();