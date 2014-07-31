"use strict";

var ProfilePicturesScreen = {
    goBack: function() {
        var backButton = this.window().navigationBar().buttons()[0];
        backButton.tap();
    },


    assertPicutresNumber: function(){
        log("Checking for ProfilePictures Number");
        Screen.logTree();
        //log(this.window().tableViews()["Empty list"].cells()[0].staticTexts()[0].name());
        //log(this.window().tableViews()["Empty list"].cells()[0].staticTexts()[0].value());
        
        //var EditProfile_Name = this.window().tableViews()["Empty list"].cells()[0].staticTexts()[0].value();
        //assertEqual("Name, " + name, EditProfile_Name, "Name update failed!");
  },


    
    
};

ProfilePicturesScreen.__proto__ = Screen;