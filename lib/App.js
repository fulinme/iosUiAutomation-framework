"use strict";

var App = {
    setLocation: function(name) {
        var locations = {
            "Akron":         { latitude: 41.0814, longitude: -81.5192 },
            "San Francisco": { latitude: 37.7873, longitude: -122.4082 },
            "mozat": { latitude: 1.2898037, longitude: 103.7911183 },

        };
        var coords = locations[name];
        if (!coords) throw "Could not find coordinates named " + name;
        this.target().setLocation(coords);
    },

    // ...

    isOnIPad: function() {
        return this.target().model().match("iPad");
    },

    isPortrait: function() {
        var orientation = this.target().deviceOrientation();
        return orientation == UIA_DEVICE_ORIENTATION_PORTRAIT ||
            orientation == UIA_DEVICE_ORIENTATION_PORTRAIT_UPSIDEDOWN;
    },

    rotateLandscape: function() {
        var orientation = UIA_DEVICE_ORIENTATION_LANDSCAPELEFT;
        this.target().setDeviceOrientation(orientation);
    },

    rotatePortrait: function() {
        var orientation = UIA_DEVICE_ORIENTATION_PORTRAIT;
        this.target().setDeviceOrientation(orientation);
    },

    target: function() {
        return UIATarget.localTarget();
    },

    captureScreenWithName: function(name){
        this.target().captureScreenWithName(name);
    },

    

};
