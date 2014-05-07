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
					id: plat.id,
					soldiers: plat.soldiers
				});

				var title = Ti.UI.createLabel({
					text: plat.name,
					font: {
						fontFamily: "bold",
						fontSize: "20dp",
						fontColor: "black",
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

	$.btnFriend.addEventListener('click', function() {
		var first = $.txtUserFirst.value;
		var last = $.txtUserLast.value;

		Cloud.Users.query({
			page: 1,
			per_page: 10,

			where: {

				first_name: $.txtUserFirst.value,
				//last_name: $.txtUserLast.value
			}

		}, function(e) {
			if(e.success) {
				var rows = [];

				for(var i = 0; i < e.users.length; i++) {
					var user = e.users[i];
					var row = Ti.UI.createTableViewRow({
						layout: "vertical",
						hasChild: true,
						name: user.username,

					});
					var title = Ti.UI.createLabel({
						text: user.username,
						font: {
							fontFamily: "bold",
							fontSize: "20dp"
						},
						left: "10dp"
					});

					row.add(title);
					rows.push(row);
				}

				$.userTable.setData(rows);
			} else {
				alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	});

	/*
	 * Pick user from table
	 */
	$.userTable.addEventListener('click', function(e) {

		APP.addChild("groupSelect", e.row.name);

	});

	// Kick off the init
	$.init();