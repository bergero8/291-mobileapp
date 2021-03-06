function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.mcongrove.navigationBar/" + s : s.substring(0, index) + "/com.mcongrove.navigationBar/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "TableView",
    style: {
        scrollsToTop: false
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "WebView",
    style: {
        scrollsToTop: false
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "TextArea",
    style: {
        scrollsToTop: false
    }
}, {
    isApi: true,
    priority: 1000.0005,
    key: "ScrollView",
    style: {
        scrollsToTop: false
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "Wrapper",
    style: {
        top: "0dp",
        left: "0dp",
        width: Ti.UI.FILL,
        height: "47dp",
        backgroundColor: "#000"
    }
}, {
    isId: true,
    priority: 100000.0013,
    key: "border",
    style: {
        bottom: "0dp",
        height: "1dp",
        width: Ti.UI.FILL,
        backgroundColor: "#000",
        opacity: .2
    }
}, {
    isId: true,
    priority: 100000.0014,
    key: "overlay",
    style: {
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        left: "0dp",
        top: "0dp"
    }
}, {
    isId: true,
    priority: 100000.0015,
    key: "left",
    style: {
        top: "0dp",
        left: "0dp",
        width: "48dp",
        height: "47dp"
    }
}, {
    isId: true,
    priority: 100000.0016,
    key: "leftImage",
    style: {
        top: "9dp",
        left: "9dp",
        width: "28dp",
        height: "28dp"
    }
}, {
    isId: true,
    priority: 100000.0017,
    key: "back",
    style: {
        top: "0dp",
        left: "0dp",
        width: "48dp",
        height: "47dp"
    }
}, {
    isId: true,
    priority: 100000.0018,
    key: "backImage",
    style: {
        top: "9dp",
        left: "9dp",
        width: "28dp",
        height: "28dp",
        preventDefaultImage: true
    }
}, {
    isId: true,
    priority: 100000.0019,
    key: "next",
    style: {
        top: "0dp",
        right: "0dp",
        width: "48dp",
        height: "47dp"
    }
}, {
    isId: true,
    priority: 100000.002,
    key: "nextImage",
    style: {
        top: "9dp",
        right: "9dp",
        width: "28dp",
        height: "28dp",
        preventDefaultImage: true
    }
}, {
    isId: true,
    priority: 100000.0021,
    key: "right",
    style: {
        top: "0dp",
        right: "0dp",
        width: "48dp",
        height: "47dp"
    }
}, {
    isId: true,
    priority: 100000.0022,
    key: "rightImage",
    style: {
        top: "9dp",
        left: "10dp",
        width: "28dp",
        height: "28dp"
    }
} ];