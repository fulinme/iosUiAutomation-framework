"use strict";

var ChatScreen = {
  goBack: function() {
        //this.logTree();
        var backButton = this.window().navigationBar().buttons()[1];
        backButton.tap();
  },

  goBack_ex: function() {
        //this.logTree();
        var backButton = this.window().navigationBar().buttons()[0];
        backButton.tap();
  },

  goChatInfo: function() {
       
        var backButton = this.window().navigationBar().buttons()[2];
        backButton.tap();
  }, 

  sendTextChat: function(message) {
        
        this.window().images()[0].textViews()[0].setValue(message);
        this.app().keyboard().buttons()["Send"].tap();  
  },    

  //to do: optimize
  sendDejaShout: function(message) {
        
        this.window().images()[0].textViews()[0].setValue(message);

        this.window().buttons()[3].tap();
        delay(1);
        this.target().tap({x:233, y:349});   

        //this.app().keyboard().buttons()["Send"].tap();  
  },   

  tapPlus: function() {
        //this.logTree();
        this.window().buttons()["AttachButtonIconAttach"].tap();
        //this.logTree();
  },

  tapAttachButtonIconKeyboard: function()
  {
      this.window().buttons()["AttachButtonIconKeyboard"].tap();
  },


  tapRecord: function() {
        this.window().buttons()["AttachButtonRecord"].tap();
  },

  tapSmiley: function() {
        this.window().buttons()[3].tap();
        delay(1);


        

        for (var i = 0; i < 4; i++) {
            this.target().tap({x:233-75*i, y:349});   

            this.target().tap({x:233-75*i, y:349-75});          
        };
        

        
  },

  tapAttachRecord: function(){
    this.window().buttons()["AttachButtonRecord"].tap();
  },

  tapRecordButton: function(time){
    this.window().buttons()["RecordButton"].touchAndHold(time);
  },


  tapCamera: function()
  {
    this.target().tap({x:58.00, y:311.00});
  },


  tapAlbum: function()
  {
    this.target().tap({x:162.00, y:311.00});
  },

  //video
  tapVideo: function()
  {
    this.target().tap({x:269.00, y:316.00});
  },

  tapVideoCancelButton: function(){
        this.app().actionSheet().cancelButton().tap();
  },

  tapTakeVideoButton: function(){
         this.app().actionSheet().buttons()["Take Video"].tap();
  },

  tapChooseExistingVideoButton: function(){
         this.app().actionSheet().buttons()["Choose Existing"].tap();
  },


  //Youtube
  tapYouTube: function()
  {
    this.target().tap({x:56.00, y:415.00});
  },

  searchYouTube: function(text)
  {
    this.window().tableViews()["Empty list"].searchBars()[0].tap();
    this.app().keyboard().typeString(text+"\n");

    var youtubeIndex = parseInt(Math.random()*6);
    this.window().tableViews()["Search results"].cells()[youtubeIndex].buttons()["Share"].tap();

  },

  //Location
  tapLocation: function()
  { 
    this.target().tap({x:173.00, y:416.00});
    //delay(1);

  },

  tapLocationSend: function()
  {
     this.app().navigationBar().buttons()["Send"].tap();
  },

  tapLocationCancel: function()
  {
     this.app().navigationBar().buttons()["Cancel"].tap();
  },


};

ChatScreen.__proto__ = Screen;