import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		checkin: function(pairing){
			var log = this.store.createRecord('log', {
				pairing: pairing,
				date: new Date("2014/09/26")
			});
			log.save();
		}
	}
});
