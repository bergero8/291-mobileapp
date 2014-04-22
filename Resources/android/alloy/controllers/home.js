function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Wrapper = Ti.UI.createView({
        id: "Wrapper",
<<<<<<< HEAD
        name: "Text"
=======
        name: "Text",
        layout: "vertical"
>>>>>>> 6f9e830650f71bdd3467a4b07529f8ddc9a44f6f
    });
    $.__views.Wrapper && $.addTopLevelView($.__views.Wrapper);
    $.__views.NavigationBar = Alloy.createWidget("com.mcongrove.navigationBar", "widget", {
        id: "NavigationBar",
        image: "data/logo.png",
        __parentSymbol: $.__views.Wrapper
    });
    $.__views.NavigationBar.setParent($.__views.Wrapper);
<<<<<<< HEAD
    $.__views.container = Ti.UI.createScrollView({
        scrollsToTop: false,
        id: "container"
    });
    $.__views.Wrapper.add($.__views.container);
    $.__views.heading = Ti.UI.createLabel({
        id: "heading"
    });
    $.__views.container.add($.__views.heading);
=======
    $.__views.heading = Ti.UI.createLabel({
        id: "heading"
    });
    $.__views.Wrapper.add($.__views.heading);
>>>>>>> 6f9e830650f71bdd3467a4b07529f8ddc9a44f6f
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/Army.png",
        width: "300dp"
    });
<<<<<<< HEAD
    $.__views.container.add($.__views.image);
    $.__views.text = Ti.UI.createLabel({
        id: "text"
    });
    $.__views.container.add($.__views.text);
=======
    $.__views.Wrapper.add($.__views.image);
    $.__views.text = Ti.UI.createLabel({
        id: "text"
    });
    $.__views.Wrapper.add($.__views.text);
>>>>>>> 6f9e830650f71bdd3467a4b07529f8ddc9a44f6f
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var CONFIG = arguments[0];
    APP.log("debug", "text | " + JSON.stringify(CONFIG));
    $.heading.text = CONFIG.heading;
    $.heading.color = APP.Settings.colors.hsb.primary.b > 70 ? "#000" : APP.Settings.colors.primary;
    $.text.text = CONFIG.text;
    $.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
    true === CONFIG.isChild ? $.NavigationBar.showBack(function() {
        APP.removeChild();
    }) : APP.Settings.useSlideMenu ? $.NavigationBar.showMenu(function() {
        APP.toggleMenu();
    }) : $.NavigationBar.showSettings(function() {
        APP.openSettings();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;