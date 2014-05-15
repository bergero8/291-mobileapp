var args = arguments[0] || {};
var APP = require("core");
var Cloud = require("ti.cloud");

$.init = function() {
	APP.log("debug", "message.init");

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
$.msgLabel.text = "Send message to " + args[0] + "this page still under development";

/*Cloud.Statuses.create({
    place_id: myPlaceId,
    message: $.txtMsg.value,
    photo: Titanium.Filesystem.getFile('photo.jpg')
}, function (e) {
    if (e.success) {
        var status = e.statuses[0];
        alert('Success:\n' +
            'id: ' + status.id + '\n' +
            'place: ' + status.place.name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});*/

$.init();