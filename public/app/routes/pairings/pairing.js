import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    checkin: function(pairing){
      var route = this;
      var user = this.get('currentUserService.user');

      var log = this.store.createRecord('log', {
        user: user,
        pairing: pairing
      });

      log.save().then(function(l){
        user.set('checkedin', true);
        pairing.get('logs').pushObject(l);
        route.transitionTo('pairings.pairing', pairing);
      }); 
    }
  }
});
