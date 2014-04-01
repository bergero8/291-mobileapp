var args = arguments[0] || {};
var APP = require("core");
$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
$.NavigationBar.showBack(function(_event) {
	APP.removeChild();
});

var buttmoney = Titanium.UI.createButton({
	color: '#fff',
	backgroundImage: '/money.jpg',
	//backgroundSelectedImage: '../images/BUTT_grn_on.png',
	//backgroundDisabledImage: '../images/BUTT_drk_off.png',
	left: 80,
	width: 57,
	height: 57,
	/*font: {
		fontSize: 20,
		fontWeight: 'bold',
		fontFamily: 'Helvetica Neue'
	},
	title: 'Purchase'*/
});
var buttplane = Titanium.UI.createButton({
	color: '#fff',
	backgroundImage: '/plane.jpg',
	//left: 137,
	width: 57,
	height: 57,

});
var butthealth = Titanium.UI.createButton({
	color: '#fff',
	backgroundImage: '/health.jpg',
	//left: 217,
	width: 57,
	height: 57,

});

buttmoney.addEventListener('click', function(e) {
	APP.addChild('questions');

});

$.viewCat.add(buttmoney);
$.viewCat.add(buttplane);
$.viewCat.add(butthealth);

/*$.btnFinance.addEventListener('click', function(e) {
	APP.addChild('questions');

});*/