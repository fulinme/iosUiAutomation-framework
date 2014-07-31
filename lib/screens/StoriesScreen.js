"use strict";

var StoriesScreen = {
    goBack: function() {
        var backButton = this.window().navigationBar().buttons()[0];
        backButton.tap();
    },
};

StoriesScreen.__proto__ = Screen;