var args = arguments[0] || {};
var APP = require("core");
$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
$.NavigationBar.showBack(function(_event) {
	APP.removeChild();
});

var init = function() {
	// create an empty array
	var tableArray = new Array();

	//create table rows
	for(var i = 0; i < 7; ++i) {
		var row = Titanium.UI.createTableViewRow({
			backgroundColor: 'blue',
			title: 'Question: ' + (i + 1)
		});

		tableArray[i] = row;
	}

	//TODO: set the data of the TableView to the array of TableViewRows you just made.
	$.quesTable.setData(tableArray);

};

init();
/*
 *  Have you found the best deal?
 Have you gotten your z's?
 Are you buying just because it's on sale?
 Have you asked about future deals?
 Do you love it and do you need it?
 Does It Have Meaning?
 Does It Engage or Challenge Me?
 Is this going to make my life easier in some way?
 How often will I use this?
 Do I already have something like this at home?
 Can I afford this?
Do I absolutely need this?
 */