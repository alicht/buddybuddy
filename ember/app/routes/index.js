import Ember from 'ember';
import AuthRoute from '../mixins/auth-route';


export default Ember.Route.extend(AuthRoute, {
  model: function(){
    return this.store.find('log');
  },

  actions: {
    favorite: function(log){
      var user = this.get('currentUserService.user');
      
      var fav = this.store.createRecord('favorite', {
        user: user,
        log: log
      });

      fav.save().then(function(f){
        log.get('favorites').pushObject(f);
      }); 
    }
  }
});
