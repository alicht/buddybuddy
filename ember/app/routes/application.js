import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    error: function(error, transition){
      if (error.status == 401) {
        this.transitionTo('login');
      } else {
        this._super();
      }
    }
  }
});
