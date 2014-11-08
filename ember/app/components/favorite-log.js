import Ember from 'ember';

export default Ember.Component.extend({
  favorited: function(){
    var userId = this.get('currentUser.id');
    return this.get('content.favorites').any(function(fav){
      return fav.get('strUserId') === userId;
    });
  }.property('content.favorites.@each.user'),

  actions: {
    doFavorite: function(log){
      var favorite;
      var currentUser = this.get('currentUser');
      if (this.get('favorited')){
        favorite = log.get('favorites').findBy('strUserId', currentUser.get('id'));
        favorite.destroyRecord().then(function(){
          log.get('favorites').popObject(favorite);
        });
      }else{
        favorite = this.store.createRecord('favorite', {user: currentUser, log: log});
        favorite.save().then(function(fav){
          fav.set('user', currentUser);
          log.get('favorites').pushObject(fav);
        }); 
      }
    },

    toggleList: function(){
      this.toggleProperty('isShow');
    }
  }
});


