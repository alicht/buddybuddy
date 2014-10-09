module( "Integration - buddybuddy", {
   setup: function() {
    // Sr.reset(); 
    //visit login page: 
    visit('/login');  
    
     
   } 
 }); 




//check currentPath: 
test('check correct page', function(){
	equal(currentPath(), "login");
});


//click loginButton:
test('loginButton can be clicked', function(){
	//click($('.btn-primary'));
});



//check currentSelection equals username: 
test('check the what is currently selected', function(){ 
	var username = "Charlie Ridley";
	var currentSelection = $('.ember-select option:selected').text(); 
	equal(currentSelection, username);
});



//check that username is in ddList: 
test('username is in ddList', function(){ 
	var username = "Nick Blanchet";
	//rotate through list
	for(var i=1; i < $('.ember-select option').length; i++){ 
		var currentOption = $('.ember-select option')[i];
		//and compare
		if(currentOption === username){ 
			//test passes on a match
			equal(currentOption, username);
		}
	}
});




//login as existing user: 
test('select user from ddmenu and login', function(){ 
	var username = "Designy Heyjin";
	//check currentSelection
	var currentSelection = $('.ember-select option:selected').text(); 
	//function to click login button
	var clickLogin = function(){
			click($('.btn-primary')); 
		};
	if(currentSelection === username){
		//click login button 
		clickLogin();
	} else { 
		//rotate through options  
		for(var i=1; i < $('.ember-select option').length; i++){ 
			var currentOption = $('.ember-select option')[i]; 
			//until a match is found
			if(currentOption === username){ 
				//then login
				click(currentOption); 
				andThen(clickLogin);
			}
		}
	}
});





