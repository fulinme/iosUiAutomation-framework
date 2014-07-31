"use strict";

var SettingsScreen = {

    goBack: function() {
        this.window().navigationBar().buttons()[0].tap();
    },

    goBackSetting: function()
    {
        this.window().navigationBar().buttons()[0].tap();
    },

    tapNotifications: function(){
        this.window().tableViews()[0].cells()[0].tap();
    },

    tapChatSettings: function(){
        this.window().tableViews()[0].cells()[1].tap();
    },

    tapBlockList: function(){
        this.window().tableViews()[0].cells()[2].tap();
    },

    tapFAQ: function(){
        this.window().tableViews()[0].cells()[3].tap();
    },


    tapFeedback: function(){
        this.window().tableViews()[0].cells()[4].tap();
    },

    inputFeedback: function(text)
    {
        this.app().keyboard().typeString(text);
    },

    tapAbout: function(){
        this.window().tableViews()[0].cells()[5].tap();
    },

    tapClearChatHistory: function()
    {
        this.window().tableViews()[0].cells()[6].tap();
    },

    tapLogOut: function()
    {
        this.window().tableViews()[0].cells()[7].tap();
    },

};

SettingsScreen.__proto__ = Screen;