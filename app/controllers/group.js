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

	$.btnFriend.addEventListener('click', function() {
		Cloud.Users.query({
			page: 1,
			per_page: 10,
			where: {
				//username: 'testfriend2'
				first_name: $.txtFindFriend.value

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

	// Kick off the init
	$.init();