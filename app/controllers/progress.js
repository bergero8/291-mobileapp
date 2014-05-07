	/**
	 * 
	 * @class Controllers.settings
	 * @uses core
	 */
	var APP = require("core");
	var Cloud = require("ti.cloud");

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

	/*
	 * animate progress
	 */
	$.btnAnimate.addEventListener('click', function() {
		var convoyAnimate = Ti.UI.createAnimation({
			top: 20,
			left: 250,
			duration: 3000
		});
		$.convoyImageView.animate(convoyAnimate);
	});

	var startLabel = Ti.UI.createLabel({
		color: '#900',
		font: {
			fontSize: 10
		},
		shadowColor: '#aaa',
		shadowOffset: {
			x: 5,
			y: 5
		},
		shadowRadius: 3,
		//text: 'Start',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		top: 100,
		left: 30,
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE
	});

	var finishLabel = Ti.UI.createLabel({
		color: '#900',
		font: {
			fontSize: 10
		},
		shadowColor: '#aaa',
		shadowOffset: {
			x: 5,
			y: 5
		},
		shadowRadius: 3,
		//text: 'Goal',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		top: 10,
		left: 250,
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE
	});

	$.container.add(startLabel);
	$.container.add(finishLabel);
	// Kick off the init
	$.init();