	/**
	 * 
	 * @class Controllers.settings
	 * @uses core
	 */
	var APP = require("core");
	var count = 0;

	/**
	 * Initializes the controller
	 */
	$.init = function() {
		APP.log("debug", "setup.init");

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
		alert($.goal.getSize); /////////////
		//$.goal.add($.txtGoal);
		$.txtPlatoon.setVisible(false);
		$.btnPlatoon.setVisible(false);
		$.txtPlatoon.setEditable(false);

		$.platoonSwitch.addEventListener('click', function() {
			count++;
			var mod = count % 2;
			if(mod != 0) {
				//if($.platoonSwitch.getValue) {
				$.txtPlatoon.setVisible(true);
				$.btnPlatoon.setVisible(true);
				$.txtPlatoon.setEditable(true);
			} else {
				$.txtPlatoon.setVisible(false);
				$.btnPlatoon.setVisible(false);
				$.txtPlatoon.setEditable(false);
			}

		});
	};

	/*function outputState() {
		//Ti.API.info('Switch value: ' + $.basicSwitch.value)
		if($.platoonSwitch.getValue) {
			$.txtPlatoon.setVisible(true);
			$.btnPlatoon.setVisible(true);
			$.txtPlatoon.setEditable(true);
		} else {
			$.txtPlatoon.setVisible(false);
			$.btnPlatoon.setVisible(false);
			$.txtPlatoon.setEditable(false);
		}
	}*/

	// Kick off the init
	$.init();