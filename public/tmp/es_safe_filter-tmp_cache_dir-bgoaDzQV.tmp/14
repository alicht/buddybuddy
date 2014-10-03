import Ember from 'ember';
import AuthRoute from '../mixins/auth-route';
/* global moment */

export default Ember.Route.extend(AuthRoute, {
  model: function() {
    var currentUser = this.get('currentUserService.user');
    return this.store.find('pairing', {queryName: 'currentPairingQuery',userId: currentUser.get('id'), date: moment().toString()});
  },

  afterModel: function(model) {
    if (!Ember.empty(model)) {
      this.transitionTo('pairings.pairing', model.get('lastObject'));
    }
  }
});
