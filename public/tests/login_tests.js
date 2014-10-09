module( "Integration - buddybuddy", {
   setup: function() {
     //Sr.reset(); 
     visit('/login'); 
     //testData 
     var username; 
	 var currentOption; 
   }
 }); 


// checks that selected option matches username 
test('selected option matches username', function(){
	expect(1); 
	var ddmenuLength = $("#ember1559").find("option").length; 
	for(var i=0; i<ddmenuLength; i++){
		currentOption = $("#ember1559").find("option")[i]; 
		if(currentOption.textContent == username){
			click(username);  //really?
		}
	}
	equal(currentOption.textContent, username);
}); 


//successful login: assertions might need to be separated: 
test('logs in successfully', function(){
	var button = $('button[data-ember-action=\'1575\']'); 
	click(button); 
	andThen( function(){
		var welcome = "Hi " + username;   
		equal($('h3').text(), welcome);  //welcome message  
		equal(currentPath(), '/pairings/1');  //path 
		equal( find('button[data-ember-action=\'1888\']'), true);  //checkinButton
	});
});  


//check pairing:{}

//check dateRange 

















