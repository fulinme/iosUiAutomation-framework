"use strict";

var Tab3Screen = {
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
        this.logTree();
        this.window().buttons()["TabIconMe"].tap();
    },

    goProfilePictures: function() {
        this.target().tap({x:20, y:244});
    },

    goDejas: function() {
        this.target().tap({x:214, y:244});
    },

    goStatus: function() {
         this.window().tableViews()[0].cells()[0].tap();
    },

    goEditProfile: function() {
        this.window().tableViews()[0].cells()[1].tap();
    },

    goSettings: function() {
        this.window().tableViews()[0].cells()[2].tap();
    },

    tapProfilePhoto: function() {
        this.window().tableViews()["Empty list"].scrollUp();
        delay(1);
        this.window().tableViews()["Empty list"].tapWithOptions({tapOffset:{x:0.58, y:0.16}});
    },

    tapCoverPhoto: function(){
        this.window().tableViews()["Empty list"].tapWithOptions({tapOffset:{x:0.20, y:0.27}});
    },

    tapActionSheetCancelButton: function(){
        this.app().actionSheet().cancelButton().tap();
    },

    tapActionSheetTakePhotoButton: function(){
         this.app().actionSheet().buttons()["Take Photo"].tap();
    },

    tapActionSheetChooseExistingButton: function(){
         this.app().actionSheet().buttons()["Choose Existing"].tap();
    },

    assertStatus: function(status) {
        log("Checking for update Status");
        this.target().pushTimeout(2);
          //this.window().activityIndicators()[0].isVisible();
        var result = this.window().staticTexts()["Saved"].isVisible();
          
        this.target().popTimeout();

        //log("*****************************");
        log(this.window().tableViews()["Empty list"].cells()[0].staticTexts()[0].name());
        log(this.window().tableViews()["Empty list"].cells()[0].staticTexts()[0].value());
        
        var tab3Status = this.window().tableViews()["Empty list"].cells()[0].staticTexts()[0].value();
        assertEqual("Status, "+status, tab3Status, "Status update failed!");

        //assert(result, "Cover Photo updated")

    },
    
    assertUpdateCoverPhoto: function(){
          log("Checking for update cover photo");
          this.target().pushTimeout(20);
          //this.window().activityIndicators()[0].isVisible();
          var result = this.window().staticTexts()["Cover Photo updated"].isVisible();
          
          this.target().popTimeout();
        
          assert(result, "Cover Photo updated")
         
    },

    assertUpdateProfilePhoto: function(){
          log("Checking for update profile photo");
          this.target().pushTimeout(20);
          //this.window().activityIndicators()[0].isVisible();
          var result = this.window().staticTexts()["Photo updated"].isVisible();
          this.target().popTimeout();

          assert(result, "profile Photo updated")
    },

    



};

Tab3Screen.__proto__ = Screen;