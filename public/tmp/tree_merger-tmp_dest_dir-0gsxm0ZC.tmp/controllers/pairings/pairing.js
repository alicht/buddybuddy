import Ember from 'ember';

export default Ember.ObjectController.extend({
	today: new Date(),

	yourBuddy: function(){
		var primaryUser = this.get('content.primaryUser');
		var secondaryUser = this.get('content.secondaryUser');
		var currentUser = this.get('currentUserService.user');
		
		return primaryUser.get('id')===currentUser.get('id') ? secondaryUser : primaryUser;
	}.property('currentUserService.user', 'content.primaryUser', 'content.secondaryUser')
});
