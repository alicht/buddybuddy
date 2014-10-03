import Ember from 'ember';
import AuthRoute from '../mixins/auth-route';

export default Ember.Route.extend(AuthRoute, {
  model: function(){
    return this.store.find('user');
  }
});
