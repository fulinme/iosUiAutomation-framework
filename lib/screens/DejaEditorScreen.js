"use strict";

var DejasEditorScreen = {
    goBack: function() {
        var backButton = this.window().navigationBar().buttons()[1];
        backButton.tap();
    },

    tapBarPlus: function(){
        this.window().navigationBars()[0].buttons()["UIButtonBarPlus"].tap();
    },

};

DejasEditorScreen.__proto__ = Screen;