import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('user');
  },

  actions: {
    login: function(user) {
      localStorage.setItem('currentUser', JSON.stringify(user.toJSON({includeId: true})));
      this.set('currentUserService.user', user);
      var attemptedTransition = this.get('controller.attemptedTransition');
      if (attemptedTransition) {
        this.set('controller.attemptedTransition', null);
        attemptedTransition.retry();
      }
      else {
        this.transitionTo('index');
      }
    }
  }
});
