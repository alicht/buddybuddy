import Ember from 'ember';

export default Ember.Mixin.create({

  beforeModel: function(transition) {
    if (!this.get('currentUserService.user')) {
      var login = this.controllerFor('login');
      login.set('attemptedTransition', transition);
      this.transitionTo('login');
    }

    this._super(transition);
  }

});
