"use strict";

var ChatWallpaperScreen = {
   goBack: function() {
        //this.logTree();
        var backButton = this.window().navigationBar().buttons()[0];
        backButton.tap();
  },

  tapWallpaperLibrary: function()
  {
      this.window().tableViews()["Empty list"].cells()["Wallpaper Library"].tap();
  },

  tapTakePhoto: function()
  {
    this.window().tableViews()["Empty list"].cells()["Take Photo"].tap();
  },

  tapChooseExisting: function()
  {
     this.window().tableViews()["Empty list"].cells()["Choose Existing"].tap();
  },

  tapWallpaperLibraryChoose: function(index)
  {
      var list = index%3;
      var row = parseInt(index/3);

      this.target().tap({x:(53+106*list), y:(53+106*row)});   
      //this.target().tap({x:233-75*i, y:349-75});          
      //this.window().tableViews()["Empty list"].visibleCells()[index].tap();
  },


};

ChatWallpaperScreen.__proto__ = Screen;