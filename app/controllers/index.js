/**
 * Main application controller
 * 
 * **NOTE: This controller is opened first upon application start and
 * initializes the core application code (`APP.init`). This controller
 * also sets UI elements to global scope for easy access.**
 * 
 * @class Controllers.index
 * @uses core
 */

Alloy.Globals.swipeEnabled = false;

// Pull in the core APP singleton
var APP = require("core");

// configure cloud
var Cloud = require('ti.cloud');

// Make sure we always have a reference to global elements throughout the APP singleton
APP.MainWindow = $.MainWindow;
APP.GlobalWrapper = $.GlobalWrapper;
APP.ContentWrapper = $.ContentWrapper;
APP.Tabs = $.Tabs;
APP.SlideMenu = $.SlideMenu;

// Start the APP
APP.init();