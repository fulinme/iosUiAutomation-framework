"use strict";

var MyDejasScreen = {
    goBack: function() {
        var backButton = this.window().navigationBar().buttons()[0];
        backButton.tap();
    },

    tapBarPlus: function(){
        this.window().navigationBars()[0].buttons()["UIButtonBarPlus"].tap();
    },

};

MyDejasScreen.__proto__ = Screen;