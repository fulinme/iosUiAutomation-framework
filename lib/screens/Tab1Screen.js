"use strict";

var Tab1Screen = {
    goChat: function(name) {
        this.window().tableViews()[0].cells()[name].tap();
    },    

    goTab2: function()
    {
        this.window().buttons()["TabIconSocial"].tap();
    },

    goTab3: function()
    {
        this.window().buttons()["TabIconMe"].tap();
    },

    goSelectContacts: function(){
       this.navigationBar().buttons()["UIButtonBarCompose"].tap();
    },

    inputSearchChats: function(name)
    {
        delay(1);
        this.window().tableViews()["Empty list"].searchBars()[0].tap();
        this.app().keyboard().typeString(name);
        this.window().tableViews()["Search results"].cells()[0].tap();
    },

    tapNewGroup: function()
    {
        this.window().tableViews()["Empty list"].buttons()["New Group"].tap();

    },

    tapBroadcast: function()
    {
        this.window().tableViews()["Empty list"].buttons()["Broadcast"].tap();
    },

    addTerm: function(name) {
        log("Showing SelectContactsScreen to add chat");
        UIATarget.onAlert = function() {
            return true;
        };
        this.navigationBar().buttons()["UIButtonBarCompose"].tap();

        this.app().keyboard().typeString(name);
        this.app().alert().defaultButton().tap();
    },

    removeTerm: function(name) {
        log("Removing chat term", name);
        var editButton = this.navigationBar().buttons()["Edit"];
        editButton.tap();

        var cell = this.window().tableViews()[0].cells()[name];

        var deleteSwitch = cell.switches()[0];
        deleteSwitch.tap();

        var deleteButton = cell.buttons()[0];
        deleteButton.tap();

        var doneButton = this.navigationBar().buttons()["Done"];
        doneButton.tap();

    },

    assertTerm: function(index, name) {
        log("Checking for", name, "at index", index);
        var cell = this.tableView().cells()[index];
        assertEqual(cell.name(), name);
    },

    assertNoTerm: function(name) {
        log("Assert no term named", name);
        this.target().pushTimeout(0.1);
        var cell = this.window().tableViews()[0].cells()[name];
        this.target().popTimeout();
        assert(!cell.isValid(), "Cell still there");
    },

    assertSearchTermOrder: function(terms) {
        var termCells = this.tableView().cells().toArray();
        var actualTerms = termCells.map(function(cell) {
            return cell.name();
        });

        assertEqualArrays(actualTerms, terms);
    },

   

    navigationBar: function() {
        if (App.isOnIPad() && App.isPortrait()) {
            return this.window().popover().navigationBar();
        } else {
            return this.__proto__.navigationBar();
        }
    },

    tableView: function() {
        var root;
        if (App.isOnIPad() && App.isPortrait()) {
            root = this.window().popover();
        } else {
            root = this.window();
        }
        return root.tableViews()[0];
    }
};

Tab1Screen.__proto__ = Screen;