import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var today = new Date();
    var currentUser = this.get('currentUserService.user');
    return this.store.find('pairing').then(function(pairings){
      return pairings.filter(function(pairing){
        return (pairing.get('primaryUser') === currentUser || pairing.get('secondaryUser') === currentUser) &&
               (pairing.get('startDate') <= today && pairing.get('endDate') >= today);
      });
    });
  },

  afterModel: function(model, transition) {
    if (model[0]) {
      this.transitionTo('pairing', model[0]);
    }
  }
});
