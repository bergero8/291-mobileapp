	/**
	 * 
	 * @class Controllers.settings
	 * @uses core
	 */
	var APP = require("core");
	var Cloud = require('ti.cloud');

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
		Cloud.Friends.add({
			//user_ids: checked.join(",")
			user_ids: $.txtFriend.id
		}, function(e) {
			if(e.success) {
				alert('Friend(s) added');
			} else {
				alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	});

	$.btnFindFriend.addEventListener('click', function() {
		Cloud.Friends.search({
			//user_id: searchID
			user_id: $.txtFriend.value
		}, function(e) {
			if(e.success) {
				alert('Success:\n' +
					'Count: ' + e.users.length);
				for(var i = 0; i < e.users.length; i++) {
					var user = e.users[i];
					alert('id: ' + user.id + '\n' +
						'first name: ' + user.first_name + '\n' +
						'last name: ' + user.last_name);
				}
			} else {
				alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	});
	// Kick off the init
	$.init();