	/**
	 * 
	 * @class Controllers.settings
	 * @uses core
	 */
	var APP = require("core");
	var Cloud = require("ti.cloud");
	var groupPass = require("group");
	var args = arguments[0] || {};

	/**
	 * Initializes the controller
	 */
	$.init = function() {
		APP.log("debug", "Group.init");

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
	 * Show groups
	 */
	var showPlatoons = Cloud.Objects.query({
		classname: 'Platoon',
		page: 1,
		per_page: 10,

	}, function(e) {
		if(e.success) {
			var rows = [];

			for(var i = 0; i < e.Platoon.length; i++) {
				var plat = e.Platoon[i];
				var row = Ti.UI.createTableViewRow({
					layout: "vertical",
					hasChild: true,
					name: plat.name,

				});
				var title = Ti.UI.createLabel({
					text: plat.name,
					font: {
						fontFamily: "bold",
						fontSize: "20dp",
						fontColor: "black"
					},
					left: "10dp"
				});

				row.add(title);
				rows.push(row);
			}

			$.groupTable.setData(rows);
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});

	/*
	 * Event listener to select a platton to assing a user too
	 */
	$.groupTable.addEventListener('click', function(e) {

		var groupSelected = e.row.name;
		//var friend = groupPass.getFriend();
		alert(args);

	});

	$.init();