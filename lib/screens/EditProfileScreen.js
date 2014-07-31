"use strict";

var EditProfileScreen = {
  goBack: function() 
  {
     this.window().navigationBar().buttons()[0].tap();
  },

  backToEditProfile: function(){
     this.window().navigationBar().buttons()[0].tap();
  },

  //edit name
  tapName: function()
  {
     this.window().tableViews()["Empty list"].cells()[0].tap();
  },

  inputName: function(name)
  {
     this.window().tableViews()["Empty list"].cells()[0].textFields()[0].tap();
     this.app().keyboard().typeString(name);
  },

  clearName: function()
  {
     this.window().tableViews()["Empty list"].cells()[0].textFields()[0].buttons()[0].tap();
     //(var name = this.window().tableViews()["Empty list"].cells()[0].staticTexts()[0].name();
     //var nameLength = name.length;
     
     //for (var i = 0; i < nameLength; i++) {
     //   this.app().keyboard().keys()["Delete"].tap();  
     //}


  },

  saveName: function()
  {
      this.app().navigationBar().buttons()["Save"].tap();
  },

  exitNameEdit: function()
  {
     this.app().navigationBar().buttons()[0].tap();
  },

  assertName: function(name){
        log("Checking for update name");
        //Screen.logTree();
        //log(this.window().tableViews()["Empty list"].cells()[0].staticTexts()[0].name());
        //log(this.window().tableViews()["Empty list"].cells()[0].staticTexts()[0].value());
        
        var EditProfile_Name = this.window().tableViews()["Empty list"].cells()[0].staticTexts()[0].value();
        assertEqual("Name, " + name, EditProfile_Name, "Name update failed!");
  },

  //edit gender
  tapGender: function()
  {

  },

  tapMale: function()
  {
    this.window().tableViews()["Empty list"].cells()["Male"].buttons()["Male"].tap();
  },

  tapFemale: function()
  {
    this.window().tableViews()["Empty list"].cells()["Male"].buttons()["Female"].tap();
  },

  //country
  tapCountry: function()
  {
    this.window().tableViews()["Empty list"].cells()[2].tap();
  },





  //email
  tapEmail: function()
  {
    this.window().tableViews()["Empty list"].cells()[3].tap();
  },


};

EditProfileScreen.__proto__ = Screen;