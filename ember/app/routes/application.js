import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    signOut: function() {
      this.set('currentUserService.user', null);
      localStorage.removeItem('currentUser');
      this.transitionTo('login');
    }
  }
});
