function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Wrapper = Ti.UI.createView({
        layout: "vertical",
        id: "Wrapper",
        name: "Text"
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
        top: "0dp",
        backgroundColor: "#FFF",
        layout: "vertical",
        showVerticalScrollIndicator: true,
        id: "container"
    });
    $.__views.Wrapper.add($.__views.container);
    $.__views.heading = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        right: "15dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "18dp",
            fontFamily: "HelveticaNeue-Light"
        },
        color: "#000",
        id: "heading"
    });
    $.__views.container.add($.__views.heading);
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/Army.png",
        width: "300dp"
    });
    $.__views.container.add($.__views.image);
    $.__views.text = Ti.UI.createLabel({
        top: "10dp",
        left: "15dp",
        right: "15dp",
        bottom: "15dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "14dp",
            fontFamily: "HelveticaNeue"
        },
        color: "#000",
        id: "text"
    });
    $.__views.container.add($.__views.text);
    $.__views.txtUser = Ti.UI.createTextField({
        id: "txtUser",
        hintText: "Enter user name",
        width: "300dp"
    });
    $.__views.container.add($.__views.txtUser);
    $.__views.txtPass = Ti.UI.createTextField({
        id: "txtPass",
        hintText: "Enter password",
        passwordMask: "true",
        width: "300dp"
    });
    $.__views.container.add($.__views.txtPass);
    $.__views.btnLogin = Ti.UI.createButton({
        title: "Login",
        id: "btnLogin"
    });
    $.__views.container.add($.__views.btnLogin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var Cloud = require("ti.cloud");
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
    $.btnLogin.addEventListener("click", function() {
        Cloud.Users.login({
            login: $.txtUser.value,
            password: $.txtPass.value
        }, function(e) {
            if (e.success) {
                e.users[0];
                $.text.text = "You are logged in!";
                $.txtUser.setVisible(false);
                $.txtPass.setVisible(false);
                $.btnLogin.setVisible(false);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;