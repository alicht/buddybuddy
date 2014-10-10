import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    checkin: function(pairing){
      var route = this;

      var log = this.store.createRecord('log', {
        user: this.get('currentUserService.user'),
        pairing: pairing
      });

      log.save().then(function(l){
        pairing.get('logs').pushObject(l);
        route.transitionTo('pairings.pairing', pairing);
      }); 
    }
  }
});
