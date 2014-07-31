"use strict";

var Tab2Screen = {
    goStories: function() {
        //this.logTree();
        this.window().tableViews()[0].cells()["Stories"].tap();
    },  

    goAddContacts: function() {
        this.window().tableViews()[0].cells()["Add Contacts"].tap();
    }, 

    goInvitePeopleToDeja: function() {
        this.window().tableViews()[0].cells()["Invite People to Deja"].tap();
    },

    goTab1: function()
    {
        this.window().buttons()["TabIconChats"].tap();
    },

    goTab3: function()
    {
        this.window().buttons()["TabIconMe"].tap();

        this.logTree();
    },

};

Tab2Screen.__proto__ = Screen;