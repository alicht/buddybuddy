import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('user');
  },

  actions: {
    login: function() {
      var attemptedTransition = this.get("controller.attemptedTransition");
      if (attemptedTransition) {
        attemptedTransition.retry();
      }
      else {
        this.transitionTo("index");
      }
    }
  }
});
