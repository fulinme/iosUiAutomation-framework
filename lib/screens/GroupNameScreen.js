"use strict";

var GroupNameScreen = {
  
  goBack: function() {
        //this.logTree();
        var backButton = this.window().navigationBar().buttons()[0];
        backButton.tap();
  },

  inputGroupName: function(name)
  {
        //delay(1);
        this.window().textFields()[0].tap();
        target.frontMostApp().keyboard().typeString(name);

        this.window().scrollViews()[0].textFields()[0].tap();
        this.app().keyboard().typeString(name);
        //this.window().tableViews()["Search results"].cells()[0].tap();
        this.window().tableViews()[0].cells()[0].tap();   //to do: 
  },

  tapStartChat: function()
  {
      this.window().buttons()["Start Chat"].tap();
  },

  
};

GroupNameScreen.__proto__ = Screen;