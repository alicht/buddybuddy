import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var currentUser = this.get('session.currentUser');
    return this.store.find('pairing', {user_id: currentUser.get('id'), current: true});
  },

  afterModel: function(model) {
    if (!Ember.empty(model)) {
      this.transitionTo('pairings.pairing', model.get('lastObject'));
    }
  }
});
