"use strict";

var GroupInfoScreen = {
   goBack: function() {
        //this.logTree();
        var backButton = this.window().navigationBar().buttons()[0];
        backButton.tap();
  },

  tapProfile: function()
  { 
    this.window().tableViews()["Empty list"].cells()[0].tap();
  },

  tapAddParticipants: function()
  {
    this.window().tableViews()["Empty list"].cells()["Add Participants"].tap();
  },

  tapChatWallpaper: function()
  {
    this.window().tableViews()["Empty list"].cells()["Chat Wallpaper"].tap();
  },

  tapBlock: function()
  {
    this.window().tableViews()["Empty list"].cells()["Block"].tap();
  },

  tapReport: function()
  {
    this.window().tableViews()["Empty list"].cells()["Report"].tap();
  },

  tapEmailChatHistory: function()
  {
    this.window().tableViews()["Empty list"].cells()["Email Chat History"].tap();
  },


  tapClearChatHistory: function()
  {
    this.window().tableViews()["Empty list"].cells()["Clear Chat History"].tap();
  },

  goBackToChatInfo: function()
  {
    this.app().navigationBar().buttons()[0].tap();
  },


};

GroupInfoScreen.__proto__ = Screen;