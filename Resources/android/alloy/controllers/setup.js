function Controller() {
    function timeSelectionY() {
        goalTime = "Year";
        alert($.txtTime.value + " " + goalTime);
    }
    function timeSelectionM() {
        goalTime = "Month";
        alert($.txtTime.value + " " + goalTime);
    }
    function timeSelectionW() {
        goalTime = "Week";
        alert($.txtTime.value + " " + goalTime);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "setup";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.Wrapper = Ti.UI.createScrollView({
        scrollsToTop: false,
        id: "Wrapper",
        name: "Setup",
        backgroundColor: "white",
        backgroundImage: "/ArmyBW.gif",
        layout: "vertical"
    });
    $.__views.Wrapper && $.addTopLevelView($.__views.Wrapper);
    $.__views.NavigationBar = Alloy.createWidget("com.mcongrove.navigationBar", "widget", {
        id: "NavigationBar",
        image: "data/logo.png",
        __parentSymbol: $.__views.Wrapper
    });
    $.__views.NavigationBar.setParent($.__views.Wrapper);
    $.__views.txtUser = Ti.UI.createTextField({
        id: "txtUser",
        hintText: "Soldier Name(User name)",
        color: "White",
        opacity: "0.3",
        borderStyle: "INPUT_BORDERSTYLE_BEZEL",
        borderColor: "black",
        width: "300",
        height: "50"
    });
    $.__views.Wrapper.add($.__views.txtUser);
    $.__views.txtFirst = Ti.UI.createTextField({
        id: "txtFirst",
        hintText: "First name",
        color: "White",
        opacity: "0.3",
        borderStyle: "INPUT_BORDERSTYLE_BEZEL",
        borderColor: "black",
        width: "300",
        height: "50"
    });
    $.__views.Wrapper.add($.__views.txtFirst);
    $.__views.txtLast = Ti.UI.createTextField({
        id: "txtLast",
        hintText: "Last name",
        color: "White",
        opacity: "0.3",
        borderStyle: "INPUT_BORDERSTYLE_BEZEL",
        borderColor: "black",
        width: "300",
        height: "50"
    });
    $.__views.Wrapper.add($.__views.txtLast);
    $.__views.txtPass = Ti.UI.createTextField({
        id: "txtPass",
        hintText: "Password",
        passwordMask: "true",
        color: "White",
        opacity: "0.3",
        borderStyle: "INPUT_BORDERSTYLE_BEZEL",
        borderColor: "black",
        width: "300",
        height: "50"
    });
    $.__views.Wrapper.add($.__views.txtPass);
    $.__views.txtGoal = Ti.UI.createTextField({
        id: "txtGoal",
        hintText: "Goal",
        color: "White",
        opacity: "0.3",
        borderStyle: "INPUT_BORDERSTYLE_BEZEL",
        borderColor: "black",
        width: "300",
        height: "50"
    });
    $.__views.Wrapper.add($.__views.txtGoal);
    $.__views.txtCost = Ti.UI.createTextField({
        id: "txtCost",
        hintText: "Cost",
        color: "White",
        opacity: "0.3",
        borderStyle: "INPUT_BORDERSTYLE_BEZEL",
        borderColor: "black",
        width: "300",
        height: "50"
    });
    $.__views.Wrapper.add($.__views.txtCost);
    $.__views.btnView = Ti.UI.createView({
        id: "btnView",
        layout: "horizontal",
        height: "50dp",
        left: "29dp"
    });
    $.__views.Wrapper.add($.__views.btnView);
    $.__views.txtTime = Ti.UI.createTextField({
        id: "txtTime",
        hintText: "Time",
        color: "White",
        opacity: "0.3",
        width: "75",
        height: "50"
    });
    $.__views.btnView.add($.__views.txtTime);
    $.__views.btnYear = Ti.UI.createButton({
        title: "Year",
        id: "btnYear"
    });
    $.__views.btnView.add($.__views.btnYear);
    timeSelectionY ? $.__views.btnYear.addEventListener("click", timeSelectionY) : __defers["$.__views.btnYear!click!timeSelectionY"] = true;
    $.__views.btnMonth = Ti.UI.createButton({
        title: "Month",
        id: "btnMonth"
    });
    $.__views.btnView.add($.__views.btnMonth);
    timeSelectionM ? $.__views.btnMonth.addEventListener("click", timeSelectionM) : __defers["$.__views.btnMonth!click!timeSelectionM"] = true;
    $.__views.btnWeek = Ti.UI.createButton({
        title: "Week",
        id: "btnWeek"
    });
    $.__views.btnView.add($.__views.btnWeek);
    timeSelectionW ? $.__views.btnWeek.addEventListener("click", timeSelectionW) : __defers["$.__views.btnWeek!click!timeSelectionW"] = true;
    $.__views.btnSubmit = Ti.UI.createButton({
        title: "Create User",
        id: "btnSubmit",
        borderStyle: "INPUT_BORDERSTYLE_BEZEL"
    });
    $.__views.Wrapper.add($.__views.btnSubmit);
    $.__views.__alloyId19 = Ti.UI.createView({
        layout: "horizontal",
        height: "50dp",
        id: "__alloyId19"
    });
    $.__views.Wrapper.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        text: "Setup new platoon?",
        color: "black",
        left: "45dp",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.platoonSwitch = Ti.UI.createSwitch({
        value: false,
        id: "platoonSwitch"
    });
    $.__views.__alloyId19.add($.__views.platoonSwitch);
    $.__views.txtPlatoon = Ti.UI.createTextField({
        id: "txtPlatoon",
        hintText: "Platoon Name",
        color: "#336699",
        width: "300",
        height: "50"
    });
    $.__views.Wrapper.add($.__views.txtPlatoon);
    $.__views.txtDrillSerg = Ti.UI.createTextField({
        id: "txtDrillSerg",
        hintText: "Want to set up Drill Sergeant?",
        color: "#336699",
        width: "300",
        height: "50"
    });
    $.__views.Wrapper.add($.__views.txtDrillSerg);
    $.__views.btnPlatoonSubmit = Ti.UI.createButton({
        title: "Create Platoon",
        id: "btnPlatoonSubmit"
    });
    $.__views.Wrapper.add($.__views.btnPlatoonSubmit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var Cloud = require("ti.cloud");
    var count = 0;
    var goalTime;
    $.init = function() {
        APP.log("debug", "setup.init");
        $.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
        APP.Settings.useSlideMenu ? $.NavigationBar.showMenu(function() {
            APP.toggleMenu();
        }) : $.NavigationBar.showBack(function() {
            APP.removeChild(true);
        });
        $.txtPlatoon.setVisible(false);
        $.txtPlatoon.setEditable(false);
        $.txtDrillSerg.setVisible(false);
        $.btnPlatoonSubmit.setVisible(false);
        $.platoonSwitch.addEventListener("click", function() {
            count++;
            var mod = count % 2;
            if (0 != mod) {
                $.txtPlatoon.setVisible(true);
                $.txtPlatoon.setEditable(true);
                $.txtDrillSerg.setVisible(true);
                $.txtDrillSerg.setEditable(true);
                $.btnPlatoonSubmit.setVisible(true);
            } else {
                $.txtPlatoon.setVisible(false);
                $.txtPlatoon.setEditable(false);
                $.txtDrillSerg.setVisible(false);
                $.txtDrillSerg.setEditable(false);
                $.btnPlatoonSubmit.setVisible(false);
            }
        });
        $.btnSubmit.addEventListener("click", function() {
            Cloud.Users.create({
                username: $.txtUser.value,
                password: $.txtPass.value,
                password_confirmation: $.txtPass.value,
                first_name: $.txtFirst.value,
                last_name: $.txtLast.value,
                custom_fields: {
                    goal: $.txtGoal.value,
                    cost: $.txtCost.value,
                    time: $.txtTime.value + " " + goalTime,
                    savings: "noEntry"
                }
            }, function(e) {
                if (e.success) {
                    var user = e.users[0];
                    alert("Success:\nid: " + user.id + "\n" + "sessionId: " + Cloud.sessionId + "\n");
                    var index = Alloy.createController("index").getView();
                    index.open();
                } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
            });
        });
        $.btnPlatoonSubmit.addEventListener("click", function() {
            Cloud.Objects.create({
                classname: "Platoon",
                fields: {
                    name: $.txtPlatoon.value,
                    owner: $.txtUser.value,
                    drillSergeant: $.txtDrillSerg.value,
                    soldiers: []
                }
            }, function(e) {
                if (e.success) {
                    var Platoon = e.Platoon[0];
                    alert("Success:\nid: " + Platoon.id + "\n" + "Name: " + Platoon.name + "\n" + "DrillSergeant: " + Platoon.drillSergeant + "\n" + "created_at: " + Platoon.created_at + "\n" + "owner: " + Platoon.owner);
                } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
            });
        });
    };
    $.init();
    __defers["$.__views.btnYear!click!timeSelectionY"] && $.__views.btnYear.addEventListener("click", timeSelectionY);
    __defers["$.__views.btnMonth!click!timeSelectionM"] && $.__views.btnMonth.addEventListener("click", timeSelectionM);
    __defers["$.__views.btnWeek!click!timeSelectionW"] && $.__views.btnWeek.addEventListener("click", timeSelectionW);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;