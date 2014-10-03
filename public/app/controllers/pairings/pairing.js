import Ember from 'ember';

export default Ember.ObjectController.extend({
	today: new Date(),
	
	yourBuddy: function(){
		if ( this.get('content.users.length') ){
			return this.get('users').findBy('id', this.get('currentUserService.user.id'));
		}
	}.property('currentUserService.user', 'content.users.length')
});
