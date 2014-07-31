"use strict";

var PhotosScreen = {
    tapCancel: function() {
        this.app().navigationBar().rightButton().tap();
    },

    tapSavedPhotos: function(){
        this.window().tableViews()["Empty list"].cells()[0].tap();
    },

    tapSavedPhotosPhotos: function(){
        this.app().navigationBar().leftButton().tap();
    } ,

    tapSavedPhotosCancel: function(){
        this.app().navigationBar().rightButton().tap();
    },

    tapSavedPhotosIndex: function(index){
        var cellId = parseInt(index/4);
        var imgId = index % 4;
        
        this.target().delay(1);
        if(index<20)
        {
            this.window().tableViews()[0].scrollUp();
            delay(1);
            if(index<4) //first line, can not be show scrollup one more time
            {
                
                this.window().tableViews()[0].scrollUp();
            }
        }
        else
        {
            this.window().tableViews()[0].scrollDown();
        }

        delay(3);

        this.window().tableViews()[0].cells()[cellId].images()[imgId].tap();

        delay(1);
    },

    tapSavedPhotosScrollUp: function()
    {
        this.window().tableViews()[0].scrollUp();
    },

    tapSavedPhotosScrollDown: function()
    {
        this.window().tableViews()[0].scrollDown();
    },

    tapSavedPhotosPreviewUse: function()
    {
        this.window().navigationBar().buttons()["Use"].tap();
    },

    tapSavedPhotosPreviewSavedPhotos: function()
    {
        this.window().navigationBar().buttons()["Saved Photos"].tap();
    },

    tapSavedPhotosChoose: function(){
        this.window().images()["PLCameraButtonBarBlack"].buttons()["Choose"].tap();
    },
};

PhotosScreen.__proto__ = Screen;