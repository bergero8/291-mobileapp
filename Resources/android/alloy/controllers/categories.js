function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "categories";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.viewCat = Ti.UI.createView({
        id: "viewCat",
        layout: "vertical"
    });
    $.__views.viewCat && $.addTopLevelView($.__views.viewCat);
    $.__views.NavigationBar = Alloy.createWidget("com.mcongrove.navigationBar", "widget", {
        id: "NavigationBar",
        image: "logo.png",
        __parentSymbol: $.__views.viewCat
    });
    $.__views.NavigationBar.setParent($.__views.viewCat);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    $.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
    $.NavigationBar.showBack(function() {
        APP.removeChild();
    });
    var b3 = Titanium.UI.createButton({
        color: "#fff",
        backgroundImage: "/money.jpg",
        leftt: 80,
        width: 57,
        height: 57
    });
    var b4 = Titanium.UI.createButton({
        color: "#fff",
        backgroundImage: "/plane.jpg",
        left: 145,
        width: 57,
        height: 57
    });
    b3.addEventListener("click", function() {
        APP.addChild("questions");
    });
    $.viewCat.add(b3);
    $.viewCat.add(b4);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;