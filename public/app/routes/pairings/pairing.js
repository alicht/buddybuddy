import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		checkin: function(pairing){
			var log = this.store.createRecord('log', {
				user: this.get('currentUserService.user'),
				pairing: pairing
			});
			log.save();
		}
	}
});
