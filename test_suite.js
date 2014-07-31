"use strict";
#import "env.js";
App.setLocation("mozat");

/*
test("test check chat message", function()
{ 
  delay(1);

  Tab1Screen.goChat(0);    
  
  for (var i = 0;i<30; i++) {
    Screen.logTree();



    delay(1);  
  };
});
*/

//Tab1
//Tab1//chat with the first person in chat list
test("tab1", function(){

  //App.rotateLandscape();
  //chat with first friend in chat list

  //log(App.target().model());

  Tab1Screen.goChat(0);    
  delay(1);
  ChatScreen.goChatInfo();   //go to chat info
  delay(1);

  //browse chat info
  ChatInfoScreen.tapProfile();   
  delay(1);
  ChatInfoScreen.goBackToChatInfo();
  delay(1);

  //create group chat from AddParticipants
  ChatInfoScreen.tapAddParticipants();
  delay(1);
  SelectContactsScreen.inputSearchFriend("gal");   //to do：now default choose the first one
  //SelectContactsScreen.inputSearchFriend("gao");   //to do:
  //SelectContactsScreen.tapNext();
  //GroupNameScreen.tapStartChat();
  //ChatScreen.goBack();
  

  ChatInfoScreen.goBackToChatInfo();
  delay(1);

  ChatInfoScreen.tapChatWallpaper();
  delay(1);  
  ChatWallpaperScreen.tapWallpaperLibrary();
  
  //var indexWallpaper = parseInt(Math.random()*7);
  //ChatWallpaperScreen.tapWallpaperLibraryChoose(indexWallpaper);
  ChatWallpaperScreen.goBack();  
  //delay(1);
  //ChatInfoScreen.tapChatWallpaper();
  delay(1);  
  ChatWallpaperScreen.tapChooseExisting();
  delay(1);
  
  PhotosScreen.tapSavedPhotos();
  delay(1);
  var photoIndex = parseInt(Math.random()*20);
  PhotosScreen.tapSavedPhotosIndex(photoIndex); //to do:
  PhotosScreen.tapSavedPhotosPreviewUse();
  delay(1);




  //ChatInfoScreen.goBackToChatInfo();
  //delay(1);


  


  //ChatInfoScreen.goBack();
  //delay(1);
  ChatScreen.sendTextChat("Testing..........");
    
  ChatScreen.sendTextChat("haha");  
  delay(1);

  //send deja shout
  ChatScreen.sendDejaShout("i am shouting");
  delay(1);

  ChatScreen.tapPlus();
  delay(1);

  //send photo
  ChatScreen.tapAlbum();
  delay(1);
  PhotosScreen.tapSavedPhotos();
  delay(1);
  var photoIndex = parseInt(Math.random()*20);
  PhotosScreen.tapSavedPhotosIndex(photoIndex);
  PhotosScreen.tapSavedPhotosPreviewUse();

  //send video  can not send video in simulator
  //delay(1);
  //ChatScreen.tapVideo();
  //delay(1);
  //ChatScreen.tapChooseExistingVideoButton();
  //delay(1);


  //send youtube
  delay(1);
  //ChatScreen.tapYouTube();
  //ChatScreen.searchYouTube("girl");

  //send location
  delay(1);
  ChatScreen.tapLocation();
  delay(1);
  ChatScreen.tapLocationSend();
  
  //send smiley
  //delay(1);
  //ChatScreen.tapPlus();
  delay(1);
  ChatScreen.tapSmiley();
  delay(1);

  
  //send audio
  ChatScreen.tapRecord();
  delay(1);
  ChatScreen.tapRecordButton(10);  
  delay(1);  
  ChatScreen.tapAttachButtonIconKeyboard();
  delay(1);
  ChatScreen.goBack_ex();
  delay(1);


});


//Tab1//chat with jack, select from contacts list
test("chat from Select Contacts list", function(){
  Tab1Screen.goSelectContacts();
  SelectContactsScreen.goTerm("Jack");
  delay(1); 
  ChatScreen.sendTextChat("haha");
  ChatScreen.goBack_ex();

});

//Tab1//chat with jack by search chats
test("chat from tab1", function(){
   Tab1Screen.inputSearchChats("Jack");
   ChatScreen.sendTextChat("haha");
   ChatScreen.goBack_ex();
});

//Tab1//remove jack from tab1
test("Removing the 'jack' term", function(){
   Tab1Screen.removeTerm("haha, Jack");
   Tab1Screen.assertNoTerm("haha, Jack");
});


//Tab2
test("tab2", function(){
   Tab1Screen.goTab2();
   
   Tab2Screen.goStories(); 
   delay(1);
   Screen.logTree();  

   StoriesScreen.goBack();

});


//Tab3
test("tab3", function(){
    //Tab1Screen.goTab2();
    
    Tab2Screen.goTab3();
    delay(1);
});

test("tab3 check Profile Pictures", function(){
    Tab3Screen.goProfilePictures();
    ProfilePicturesScreen.goBack();
    delay(1);
});

test("tab3 check Dejas", function(){
    Tab3Screen.goDejas();
    MyDejasScreen.tapBarPlus();
    delay(1);
    CreateDejaScreen.testAddDeja(1);
    
    MyDejasScreen.goBack();
});







test("tab3 update Status", function(){
   Tab3Screen.goStatus(); 

   StatusScreen.clearInput();

   var inputText = (new Date()).toLocaleString();
   StatusScreen.inputStatus(inputText);

   //StatusScreen.goSave();  //
   StatusScreen.goBack();

   //Tab3Screen.assertStatus(inputText);  //
});

//Tab3//Edit Profile
test("tab3-tap Edit Profile", function(){
    Tab3Screen.goEditProfile();
    EditProfileScreen.goBack();
});

test("tab3-Edit Profile-update Name", function(){
   //Tab1Screen.goTab3();

   Tab3Screen.goEditProfile();
   delay(1);
   EditProfileScreen.tapName();
   delay(1);

   EditProfileScreen.clearName();

   var inputName = "Jack" + "-" + (new Date()).getDate();
   EditProfileScreen.inputName(inputName);

   EditProfileScreen.saveName();
   
   EditProfileScreen.assertName(inputName);
   //Tab3Screen.assertName(inputName);

   ////Tab3Screen.goEditProfile();
   //EditProfileScreen.goBack();

});

//update name: Jack
test("tab3-Edit Profile-update Name to Jack", function(){
   //Tab1Screen.goTab3();

   Tab3Screen.goEditProfile();
   delay(1);
     Screen.logTree();
   EditProfileScreen.tapName();
   delay(1);

   EditProfileScreen.clearName();

   var inputName = "Jack";
   EditProfileScreen.inputName(inputName);

   EditProfileScreen.saveName();
   delay(1);
   //EditProfileScreen.assertName(inputName);
   //Tab3Screen.assertName(inputName);
   ////Tab3Screen.goEditProfile();
   //EditProfileScreen.goBack();
});

test("tab3-Edit Profile-update Country", function(){
   //Tab1Screen.goTab3();
   delay(1);
   Tab3Screen.goEditProfile();
   delay(1);
   EditProfileScreen.tapCountry();
   delay(1);
   EditProfileScreen.backToEditProfile();
   delay(1);
   EditProfileScreen.goBack();
   
   
   //EditProfileScreen.tapName();
   //delay(1);

   //EditProfileScreen.clearName();

   //var inputName = "Jack";
   //EditProfileScreen.inputName(inputName);

   //EditProfileScreen.saveName();
   
   //EditProfileScreen.assertName(inputName);
   //Tab3Screen.assertName(inputName);
   ////Tab3Screen.goEditProfile();
   //EditProfileScreen.goBack();
});

test("tab3-Edit Profile-update Email", function(){
   //Tab1Screen.goTab3();
   delay(3);
   //log("update enmail***********");
   //Screen.logTree();
   delay(1);
   Tab3Screen.goEditProfile();
   delay(1);
   EditProfileScreen.tapEmail();
   delay(1);
   EditProfileScreen.backToEditProfile();
   delay(1);
   EditProfileScreen.goBack();
   
});



test("tab3 update Profile Photo-Choose Existing", function(){
    //Tab1Screen.goTab3();
	 //for(var i=0; i<40; i++)
	 {
      delay(1);    
	 	  Tab3Screen.tapProfilePhoto();
      delay(1);
    	Tab3Screen.tapActionSheetChooseExistingButton();
      delay(1);
    	PhotosScreen.tapSavedPhotos();

      //PhotosScreen.tapSavedPhotosScrollUp();
    	var photoIndex = parseInt(Math.random()*40);

      
    	PhotosScreen.tapSavedPhotosIndex(photoIndex);
	 
    	PhotosScreen.tapSavedPhotosPreviewUse();

      Tab3Screen.assertUpdateProfilePhoto();
	 } 
});


test("tab3 update Cover Photo-Choose Existing", function(){
   
   //for(var i=0; i<40; i++)
   {
      Tab3Screen.tapCoverPhoto();
      delay(1);
      Tab3Screen.tapActionSheetChooseExistingButton();

      PhotosScreen.tapSavedPhotos();

      //PhotosScreen.tapSavedPhotosScrollUp();
      var photoIndex = parseInt(Math.random()*20);
      
      PhotosScreen.tapSavedPhotosIndex(photoIndex);
   
      PhotosScreen.tapSavedPhotosChoose();

      //for (var i = 0; i < 40; i++) {
      //  delay(1);
      //  Screen.logTree();
      //};


      Tab3Screen.assertUpdateCoverPhoto();
     
      
    }
});



//Tab3//Setting
test("tab3 update Settings", function(){
    //Tab1Screen.goTab3();

    Tab3Screen.goSettings();
    SettingsScreen.goBack();
});

test("test tab3-setting-Notifications", function(){
     Tab3Screen.goSettings();
     delay(1);
     SettingsScreen.tapNotifications();
     SettingsScreen.goBackSetting();

    SettingsScreen.goBack();
});

test("test tab3-setting-Chat Setting", function(){
     Tab3Screen.goSettings();
     delay(1);
     SettingsScreen.tapChatSettings();
     delay(1);
     SettingsScreen.goBackSetting();

     SettingsScreen.goBack();
});

test("test tab3-setting-Block List", function(){
     Tab3Screen.goSettings();
     delay(1); 
     SettingsScreen.tapBlockList();
     SettingsScreen.goBackSetting();

     SettingsScreen.goBack();
});

test("test tab3-setting-FAQ", function(){
     Tab3Screen.goSettings();
     delay(1);
     SettingsScreen.tapFAQ();
     SettingsScreen.goBackSetting();

     SettingsScreen.goBack();
});

test("test tab3-setting-Feedback", function(){
     Tab3Screen.goSettings();
     delay(1); 
     SettingsScreen.tapFeedback();
    

     SettingsScreen.inputFeedback(":), testing feedback!...................byebye..........:)");
     
     SettingsScreen.goBackSetting();
     SettingsScreen.goBack();
});

test("test tab3-setting-About", function(){
     Tab3Screen.goSettings();
     delay(1);
     SettingsScreen.tapAbout();
     SettingsScreen.goBackSetting();

     SettingsScreen.goBack();
});

test("test tab3-setting-Clear All Chat History", function(){
     //Tab3Screen.goSettings();
     //delay(1);
     //SettingsScreen.tapClearChatHistory();
     //SettingsScreen.goBackSetting();

     //SettingsScreen.goBack();
});

test("test tab3-setting-Log Out", function(){
     //Tab3Screen.goSettings();
     //delay(1);
     //SettingsScreen.tapLogOut();
     //SettingsScreen.goBackSetting();

     //SettingsScreen.goBack();
});








/*
test("tab3 check Profile Pictures", function(){
    Tab1Screen.goTab3();

    Tab3Screen.goProfilePictures();
      delay(1);
    ProfilePicturesScreen.assertPicutresNumber();

    ProfilePicturesScreen.goBack();

});
*/




