"use strict";

var StatusScreen = {

    goBack: function() {
        //this.logTree();
        this.window().navigationBar().buttons()[0].tap();
    },

    goSave: function() {
        this.window().navigationBar().buttons()[1].tap();
    },

    inputStatus: function(text){
        this.app().keyboard().typeString(text);
    },

    //To Do: check item in StatusScreen
    clearInput: function(){
        if(this.window().buttons()["clear"].isVisible())//to do:optimize
        {
            this.window().buttons()["clear"].tap();
        }
    },


};

StatusScreen.__proto__ = Screen;