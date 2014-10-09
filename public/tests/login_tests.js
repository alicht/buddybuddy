module( "Integration - buddybuddy", {
   setup: function() {
    // Sr.reset(); 
    //visit login page: 
    //visit('/login');  
    // create array of names:  
   } 
 }); 




test('select user from ddmenu', function(){
	visit('/login');  
	//testData
	var username = "Charlie Ridley";
	//check currentSelection
	var currentSelection = $('.ember-select option:selected'); 
	if(currentSelection === username){
		//click login button 
		click($('.btn-primary'));
	} else { 
		//function to click login button
		var fn = function(){
			click($('.btn-primary')); 
		};
		//rotate through options  
		for(var i=1; i < $('.ember-select option').length; i++){ 
			var currentOption = $('.ember-select option')[i]; 
			//until a match is found
			if(currentOption === username){ 
				//then login
				click(currentOption); 
				andThen(fn);
			}
		}
	}
});


















//login as anyone


//login based on username






//expect(1); 





// checks that selected option matches username 



// //successful login: assertions might need to be separated: 
// test('logs in successfully', function(){
// 	var button = $('button[data-ember-action=\'1575\']'); 
// 	click(button); 
// 	andThen( function(){
// 		var welcome = "Hi " + username;   
// 		equal($('h3').text(), welcome);  //welcome message  
// 		equal(currentPath(), '/pairings/1');  //path 
// 		equal( find('button[data-ember-action=\'1888\']'), true);  //checkinButton
// 	});
// });  


//check pairing:{}

//check dateRange 

















