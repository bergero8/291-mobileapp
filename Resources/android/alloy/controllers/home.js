function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Wrapper = Ti.UI.createView({
        id: "Wrapper"
    });
    $.__views.Wrapper && $.addTopLevelView($.__views.Wrapper);
    $.__views.NavigationBar = Alloy.createWidget("com.mcongrove.navigationBar", "widget", {
        id: "NavigationBar",
        image: "logo.png",
        __parentSymbol: $.__views.Wrapper
    });
    $.__views.NavigationBar.setParent($.__views.Wrapper);
    $.__views.content = Ti.UI.createView({
        top: "47dp",
        backgroundColor: "#EEE",
        layout: "vertical",
        showVerticalScrollIndicator: true,
        id: "content"
    });
    $.__views.Wrapper.add($.__views.content);
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/Sergeant_Hartman.jpg",
        width: "301dp"
    });
    $.__views.content.add($.__views.image);
    $.__views.bottomView = Ti.UI.createView({
        id: "bottomView",
        layout: "vertical"
    });
    $.__views.content.add($.__views.bottomView);
    $.__views.txtName = Ti.UI.createTextField({
        id: "txtName",
        hintText: "User Name",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.bottomView.add($.__views.txtName);
    $.__views.txtPassword = Ti.UI.createTextField({
        id: "txtPassword",
        hintText: "Password",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.bottomView.add($.__views.txtPassword);
    $.__views.btnLogin = Ti.UI.createButton({
        title: "Login",
        id: "btnLogin"
    });
    $.__views.bottomView.add($.__views.btnLogin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    var APP = require("core");
    var init = function() {
        $.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
        true === APP.isChild ? $.NavigationBar.showBack(function() {
            APP.removeChild();
        }) : APP.Settings.useSlideMenu ? $.NavigationBar.showMenu(function() {
            APP.toggleMenu();
        }) : $.NavigationBar.showSettings(function() {
            APP.openSettings();
        });
    };
    var newUser = Ti.UI.createLabel({
        text: "Create new user? Click here!"
    });
    newUser.addEventListener("click", function() {
        APP.addChild("setup");
    });
    $.bottomView.add(newUser);
    $.btnLogin.addEventListener("click", function() {
        Cloud.Users.login({
            login: $.txtName.value,
            password: $.password.value
        }, function(e) {
            if (e.success) {
                e.users[0];
                APP.addChild("questions");
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    });
    init();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;