	/**
	 * 
	 * @class Controllers.settings
	 * @uses core
	 */
	var APP = require("core");
	var Cloud = require('ti.cloud');
	var count = 0;
	var goalTime;
	var friendCount = 0;

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

		$.txtPlatoon.setVisible(false);
		$.txtPlatoon.setEditable(false);
		$.txtDrillSerg.setVisible(false);

		$.platoonSwitch.addEventListener('click', function() {
			count++;
			var mod = count % 2;
			if(mod != 0) {
				$.txtPlatoon.setVisible(true);
				$.txtPlatoon.setEditable(true);
				$.txtDrillSerg.setVisible(true);
				$.txtDrillSerg.setEditable(true);
			} else {
				$.txtPlatoon.setVisible(false);
				$.txtPlatoon.setEditable(false);
				$.txtDrillSerg.setVisible(false);
				$.txtDrillSerg.setEditable(false);

			}

		});

		//TODO:create user, group.....
		$.btnSubmit.addEventListener('click', function() {
			Cloud.Users.create({
				username: $.txtUser.value,
				password: $.txtPass.value,
				password_confirmation: $.txtPass.value,
				goal: $.txtGoal.value,
				cost: $.txtCost.value,
				time: $.txtTime.value + " " + goalTime
			}, function(e) {
				if(e.success) {
					var user = e.users[0];
					alert('Success:\n' +
						'id: ' + user.id + '\n' +
						'sessionId: ' + Cloud.sessionId + '\n');
					var index = Alloy.createController('index').getView();
					index.open();

				} else {
					alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
				}
			});
		});

		/*
		 * create Platoon (group; custom object)
		 */
		$.btnPlatoonSubmit.addEventListener('click', function() {
			Cloud.Objects.create({
				Platoon: $.txtPlatoon.value,
				fields: {
					soldiers: $.txtUser.value,
					drillSergeant: $.txtDrillSerg.value
				}
			}, function(e) {
				if(e.success) {
					var car = e.cars[0];
					alert('Success:\n' +
						'id: ' + Platoon.id + '\n' +
						'Soldiers: ' + Platoon.soldiers + '\n' +
						'DrillSergeant: ' + Platoon.drillSergeant + '\n' +
						'created_at: ' + Platoon.created_at);
				} else {
					alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
				}
			});
		});

		/*$.btnLogin.addEventListener('click', function() {
			var login = Alloy.createController('login').getView();
			login.open();
		});*/

	};

	function timeSelectionY() {
		goalTime = 'Year';
		alert($.txtTime.value + " " + goalTime);
	}

	function timeSelectionM() {
		goalTime = 'Month';
		alert($.txtTime.value + " " + goalTime);
	}

	function timeSelectionW() {
		goalTime = 'Week';
		alert($.txtTime.value + " " + goalTime);

	}

	$.btnLogin.addEventListener('click', function() {
		Cloud.Users.login({
			login: $.txtUser.value,
			password: $.txtPass.value
		}, function(e) {
			if(e.success) {
				var user = e.users[0];
				alert('Success:\n' +
					'id: ' + user.id + '\n' +
					'sessionId: ' + Cloud.sessionId + '\n' +
					'first name: ' + user.first_name + '\n' +
					'last name: ' + user.last_name);
			} else {
				alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});

	});

	// Kick off the init
	$.init();