import Ember from 'ember';
import AuthRoute from '../mixins/auth-route';


export default Ember.Route.extend(AuthRoute, {
  model: function(){
    return this.store.find('log');
  },

  actions: {
    favorite: function(log, isDelete){
      var fav;
      var currentUser = this.get('currentUserService.user');

      if (isDelete){
        fav = log.get('favorites').findBy('strUserId', currentUser.get('id'));
        fav.destroyRecord().then(function(){
          log.get('favorites').popObject(fav);
        });
      }else{
        fav = this.store.createRecord('favorite', {user: currentUser, log: log});
        fav.save().then(function(f){
          f.set('user', currentUser);
          log.get('favorites').pushObject(f);
        }); 
      }
    }
  }
});
