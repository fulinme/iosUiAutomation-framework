"use strict";

var CreateDejaScreen = {
    tapCancel: function() {
        var backButton = this.window().navigationBar().buttons()[0];
        backButton.tap();
    },

    tapBarPlus: function(){
        this.window().navigationBars()[0].buttons()["UIButtonBarPlus"].tap();
    },

    tapChoosePhoto: function()
    {
        this.window().buttons()["IconChoosePhotoNormal"].tap();
    },

    tapCamera: function(){
        this.window().buttons()["Camera"].tap();
    },

    tapSkip: function(){
        this.window().buttons()["Skip"].tap();
    },

    tapSelectGenderFemale: function(){
        this.window().buttons()["SelectGenderFemale"].tap();
    },

    tapSelectGenderMale: function(){
        this.window().buttons()["SelectGenderMale"].tap();
    },


    testAddDeja: function(index){
        delay(1);

        if (index >= 20)
        {
            this.window().buttons()["SelectGenderFemale"].tap();
        }
        else
        {

        }

        delay(1);

        this.window().buttons()["IconChoosePhotoNormal"].tap();

        delay(1);

        this.window().tableViews()[0].cells()[0].staticTexts()[0].tap();

        delay(1);

        if (index < 20) //choose Female
        {
            this.window().tableViews()[0].scrollUp();
        }
        else
        {
            this.window().tableViews()[0].scrollDown();
        }
    
        delay(1);    

        var cellId = parseInt(index / 4);
        var imgId = index % 4;
    
        this.window().tableViews()[0].cells()[cellId].images()[imgId].tap();
        delay(1);
        //this.target.captureScreenWithName("photo"+ index);

        //delay(1);
        

        this.window().navigationBar().buttons()["Use"].tap();
        delay(4);
    
        this.window().buttons()["Start"].tap();
        delay(20);
    
        //this.window().buttons()["IconEditNormal"].tap();
        this.window().buttons()["Edit"].tap();
    
        delay(1);

        DejasEditorScreen.goBack();
    
        //target.captureScreenWithName("photo"+ index +"_avatar"); //cosmopolitan
        //delay(1);
        //element.logElementTree();
        delay(1);
        this.window().navigationBar().buttons()[0].tap();
        delay(1); 
        Screen.logTree();   
        //element.logElementTree(); 
        
        //this.window().navigationBar().buttons()[0].tap();
        //delay(3);  
    },  
    
};

CreateDejaScreen.__proto__ = Screen;