"use strict";

var SelectContactsScreen = {
  goTerm: function(name){
      delay(1);
      this.window().tableViews()["Empty list"].searchBars()[0].tap();

      //this.window().tableViews()[0].searchBars()[0].setValue("Jack");
      //this.target().tap({x:150, y:80});
       //this.target().tap({x:0, y:80});
      this.app().keyboard().typeString(name);
      this.window().tableViews()["Search results"].cells()[0].tap();
  },

  inputSearchFriend: function(name)
  {
        delay(1);
        this.window().scrollViews()[0].textFields()[0].tap();
        this.app().keyboard().typeString(name);
        //this.window().tableViews()["Search results"].cells()[0].tap();

        if (this.window().tableViews()[0].length>0){ ;
          this.window().tableViews()[0].cells()[0].tap();   //to do:
        } 
        else
        {
          //
        }
  },

  tapNext: function()
  { 
      //Screen.logTree();

      //var predicate = predicateWithFormat("name=%@","Next");
      //var nextButton = Screen.searchWithPredicate(predicate, this.window().buttons());
      //nextButton.tap();
      this.window().buttons()[0].tap();
  },





};

SelectContactsScreen.__proto__ = Screen;