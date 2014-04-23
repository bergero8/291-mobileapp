function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "setup";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Wrapper = Ti.UI.createView({
        id: "Wrapper",
        name: "Setup"
    });
    $.__views.Wrapper && $.addTopLevelView($.__views.Wrapper);
    $.__views.NavigationBar = Alloy.createWidget("com.mcongrove.navigationBar", "widget", {
        id: "NavigationBar",
        image: "data/logo.png",
        __parentSymbol: $.__views.Wrapper
    });
    $.__views.NavigationBar.setParent($.__views.Wrapper);
    $.__views.container = Ti.UI.createScrollView({
        scrollsToTop: false,
        id: "container",
        backgroundColor: "white",
        top: "40",
        layout: "vertical"
    });
    $.__views.Wrapper.add($.__views.container);
    var __alloyId12 = [];
    $.__views.goal = Ti.UI.createTableViewRow({
        id: "goal",
        title: "Financial Goal"
    });
    __alloyId12.push($.__views.goal);
    $.__views.textField = Ti.UI.createTextField({
        id: "textField",
        hintText: "Goal",
        color: "#336699",
        width: "300",
        height: "50"
    });
    $.__views.goal.add($.__views.textField);
    $.__views.cost = Ti.UI.createTableViewRow({
        id: "cost",
        title: "Total Cost",
        hasChild: "true"
    });
    __alloyId12.push($.__views.cost);
    $.__views.time = Ti.UI.createTableViewRow({
        id: "time",
        title: "Time to achieve",
        hasChild: "true"
    });
    __alloyId12.push($.__views.time);
    $.__views.legal_table = Ti.UI.createTableView({
        scrollsToTop: false,
        data: __alloyId12,
        id: "legal_table",
        height: "120dp"
    });
    $.__views.container.add($.__views.legal_table);
    $.__views.btnView = Ti.UI.createView({
        id: "btnView",
        layout: "horizontal",
        center: "true"
    });
    $.__views.container.add($.__views.btnView);
    $.__views.btnYear = Ti.UI.createButton({
        title: "Year",
        id: "btnYear"
    });
    $.__views.btnView.add($.__views.btnYear);
    $.__views.btnMonth = Ti.UI.createButton({
        title: "Month",
        id: "btnMonth"
    });
    $.__views.btnView.add($.__views.btnMonth);
    $.__views.btnWeek = Ti.UI.createButton({
        title: "Week",
        id: "btnWeek"
    });
    $.__views.btnView.add($.__views.btnWeek);
    $.__views.copyright = Ti.UI.createLabel({
        id: "copyright"
    });
    $.__views.container.add($.__views.copyright);
    $.__views.version = Ti.UI.createLabel({
        id: "version"
    });
    $.__views.container.add($.__views.version);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        text: "blah blah blah",
        id: "__alloyId13"
    });
    $.__views.container.add($.__views.__alloyId13);
    $.__views.chariti = Ti.UI.createLabel({
        id: "chariti"
    });
    $.__views.container.add($.__views.chariti);
    $.__views.__alloyId14 = Ti.UI.createButton({
        title: "HELP!!!",
        id: "__alloyId14"
    });
    $.__views.container.add($.__views.__alloyId14);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    $.init = function() {
        APP.log("debug", "setup.init");
        $.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
        APP.Settings.useSlideMenu ? $.NavigationBar.showMenu(function() {
            APP.toggleMenu();
        }) : $.NavigationBar.showBack(function() {
            APP.removeChild(true);
        });
    };
    $.init();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;