function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "questions";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.questions = Ti.UI.createView({
        layout: "vertical",
        id: "questions"
    });
    $.__views.questions && $.addTopLevelView($.__views.questions);
    $.__views.NavigationBar = Alloy.createWidget("com.mcongrove.navigationBar", "widget", {
        id: "NavigationBar",
        image: "logo.png",
        __parentSymbol: $.__views.questions
    });
    $.__views.NavigationBar.setParent($.__views.questions);
    $.__views.quesTopView = Ti.UI.createView({
        id: "quesTopView",
        height: "50%",
        width: Ti.UI.Fill
    });
    $.__views.questions.add($.__views.quesTopView);
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/piggy_bank1.jpg",
        width: "300dp"
    });
    $.__views.quesTopView.add($.__views.image);
    $.__views.quesBottomView = Ti.UI.createView({
        id: "quesBottomView",
        height: "50%",
        width: Ti.UI.Fill
    });
    $.__views.questions.add($.__views.quesBottomView);
    $.__views.quesTable = Ti.UI.createTableView({
        scrollsToTop: false,
        id: "quesTable"
    });
    $.__views.quesBottomView.add($.__views.quesTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var APP = require("core");
    $.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
    $.NavigationBar.showBack(function() {
        APP.removeChild();
    });
    var init = function() {
        var tableArray = new Array();
        for (var i = 0; 7 > i; ++i) {
            var row = Titanium.UI.createTableViewRow({
                backgroundColor: "blue",
                title: "Question: " + (i + 1)
            });
            tableArray[i] = row;
        }
        $.quesTable.setData(tableArray);
    };
    init();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;