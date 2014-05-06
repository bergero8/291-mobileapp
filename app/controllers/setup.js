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
		$.btnPlatoonSubmit.setVisible(false);

		$.platoonSwitch.addEventListener('click', function() {
			count++;
			var mod = count % 2;
			if(mod != 0) {
				$.txtPlatoon.setVisible(true);
				$.txtPlatoon.setEditable(true);
				$.txtDrillSerg.setVisible(true);
				$.txtDrillSerg.setEditable(true);
				$.btnPlatoonSubmit.setVisible(true);
			} else {
				$.txtPlatoon.setVisible(false);
				$.txtPlatoon.setEditable(false);
				$.txtDrillSerg.setVisible(false);
				$.txtDrillSerg.setEditable(false);
				$.btnPlatoonSubmit.setVisible(false);

			}

		});

		//TODO:create user, group.....
		$.btnSubmit.addEventListener('click', function() {
			Cloud.Users.create({
				username: $.txtUser.value,
				password: $.txtPass.value,
				password_confirmation: $.txtPass.value,
				first_name: $.txtFirst.value,
				last_name: $.txtLast.value,
				custom_fields: {
					goal: $.txtGoal.value,
					cost: $.txtCost.value,
					time: $.txtTime.value + " " + goalTime,
					//platoon: "noEntry",
					savings: "noEntry"
				}
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
				classname: 'Platoon',
				fields: {
					name: $.txtPlatoon.value,
					owner: $.txtUser.value,
					drillSergeant: $.txtDrillSerg.value,
					soldiers: []
				}
			}, function(e) {
				if(e.success) {
					var Platoon = e.Platoon[0];
					alert('Success:\n' +
						'id: ' + Platoon.id + '\n' +
						'Name: ' + Platoon.name + '\n' +
						'DrillSergeant: ' + Platoon.drillSergeant + '\n' +
						'created_at: ' + Platoon.created_at + '\n' +
						'owner: ' + Platoon.owner);
				} else {
					alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
				}
			});
		});

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

	// Kick off the init
	$.init();