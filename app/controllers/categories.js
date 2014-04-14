//jkvar args = arguments[0] || {};
var APP = require("core");
$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
$.NavigationBar.showBack(function(_event) {
	APP.removeChild();
});

var b3 = Titanium.UI.createButton({
	color: '#fff',
	backgroundImage: '/money.jpg',
	//backgroundSelectedImage: '../images/BUTT_grn_on.png',
	//backgroundDisabledImage: '../images/BUTT_drk_off.png',
	leftt: 80,
	width: 57,
	height: 57,
	/*font: {
		fontSize: 20,
		fontWeight: 'bold',
		fontFamily: 'Helvetica Neue'
	},
	title: 'Purchase'*/
});
var b4 = Titanium.UI.createButton({
	color: '#fff',
	backgroundImage: '/plane.jpg',
	left: 145,
	width: 57,
	height: 57,

});

b3.addEventListener('click', function(e) {
	APP.addChild('questions');

});

$.viewCat.add(b3);
$.viewCat.add(b4);

/*$.btnFinance.addEventListener('click', function(e) {
	APP.addChild('questions');

});*/