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
        layout: "vertical"
    });
    $.__views.Wrapper && $.addTopLevelView($.__views.Wrapper);
    $.__views.NavigationBar = Alloy.createWidget("com.mcongrove.navigationBar", "widget", {
        id: "NavigationBar",
        image: "logo.png",
        __parentSymbol: $.__views.Wrapper
    });
    $.__views.NavigationBar.setParent($.__views.Wrapper);
    $.__views.txtName = Ti.UI.createTextField({
        id: "txtName",
        hintText: "Name",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.Wrapper.add($.__views.txtName);
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
    $.__views.Wrapper.add($.__views.txtPassword);
    $.__views.txtGoal1 = Ti.UI.createTextField({
        id: "txtGoal1",
        hintText: "First Goal",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.Wrapper.add($.__views.txtGoal1);
    $.__views.txtGoal2 = Ti.UI.createTextField({
        id: "txtGoal2",
        hintText: "Second Goal",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.Wrapper.add($.__views.txtGoal2);
    $.__views.txtGoal3 = Ti.UI.createTextField({
        id: "txtGoal3",
        hintText: "Third Goal",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        left: "10",
        width: "250",
        height: "60"
    });
    $.__views.Wrapper.add($.__views.txtGoal3);
    $.__views.btnSubmit = Ti.UI.createButton({
        title: "Submit",
        id: "btnSubmit"
    });
    $.__views.Wrapper.add($.__views.btnSubmit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    arguments[0];
    $.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
    $.NavigationBar.showBack(function() {
        APP.removeChild();
    });
    $.btnSubmit.addEventListener("click", function() {
        APP.addChild("categories");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;