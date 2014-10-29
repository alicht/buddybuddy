import Ember from 'ember';
/* global moment */

export default Ember.Route.extend({
  model: function() {
    var userId = this.get('session.user_id');
    return this.store.find('pairing', {user_id: userId, current: true});
  },

  afterModel: function(model) {
    if (!Ember.empty(model)) {
      this.transitionTo('pairings.pairing', model.get('lastObject'));
    }
  }
});
