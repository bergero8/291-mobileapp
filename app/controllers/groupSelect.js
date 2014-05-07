	/**
	 * 
	 * @class Controllers.settings
	 * @uses core
	 */
	var APP = require("core");
	var Cloud = require("ti.cloud");
	var args = arguments[0] || {};
	//var CONFIG = arguments[0];
	var CONFIG = true;
	/**
	 * Initializes the controller
	 */
	$.init = function() {
		APP.log("debug", "Group.init");

		$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);

		/*$.NavigationBar.showBack(function(_event) {
			APP.removeChild(true);
		});

		if(APP.Settings.useSlideMenu) {
			$.NavigationBar.showMenu(function(_event) {
				APP.toggleMenu();
			});
		} else {
			$.NavigationBar.showBack(function(_event) {
				APP.removeChild(true);
			});
		}*/
		if(CONFIG === true) {
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
					id: plat.id,
					//soldiers: plat.soldiers Quinn add
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
		var groupID = e.row.id;
		//var newSoldiers = JSON.parse(e.row.soldiers); Quinn add
		//newSoldiers.push(args); Quinn add
		var dialog = Ti.UI.createAlertDialog({
			confirm: 0,
			cancel: 1,
			buttonNames: ['Confirm', 'Cancel'],
			message: 'Add ' + args + ' to ' + groupSelected + '?',
			title: 'Add Soldier'
		});
		dialog.addEventListener('click', function(e) {
			if(e.index === e.source.confirm) {
				//alert('user updated');
				//userUpdate(groupSelected);
				/*
				 * update user with platoon selection
				 */

				/*var userUpdate = Cloud.Users.update({ //!!!!!!!!!!!!!!!!!!!!!!!!!
					custom_fields: { //this updates the main user not the user searched
						// for and clicked on(which is what we want)
						platoon: groupSelected

					}

				}, function(e) {
					if(e.success) {
						var user = e.users[0];
						alert('Success: ' + user.username + ' was updated with ' + user.custom_fields.platoon);
					} else {
						alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
					}
				});*/
				Cloud.Objects.update({
					classname: 'Platoon',
					id: groupID,
					fields: {
						soldiers: args
					}

				}, function(e) {
					if(e.success) {
						//var car = e.cars[0];
						alert(args + ' added to ' + groupSelected);
						APP.removeChild(); ///////////////
					} else {
						alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
					}
				});

			}

		});
		dialog.show();

	});

	$.init();