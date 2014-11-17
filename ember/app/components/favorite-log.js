import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'favorites',

  isFavorited: function(){
    var favorites = this.get('content.favorites') || [];
    var userId = this.get('currentUser.id');
    return favorites.any(function(fav){
      return fav.get('strUserId') === userId;
    });
  }.property('content.favorites.length'),

  actions: {
    toggleFavorite: function(log){
      var favorite;
      var currentUser = this.get('currentUser');
      if (this.get('isFavorited')){
        favorite = log.get('favorites').findBy('strUserId', currentUser.get('id'));
        favorite.destroyRecord().then(function(){
          log.get('favorites').popObject(favorite);
        });
      }else{
        favorite = this.store.createRecord('favorite', {user: currentUser, log: log});
        favorite.save().then(function(fav){
          fav.set('user', currentUser);
          log.get('favorites').then(function(favorites){
            favorites.pushObject(fav);
          });
        }); 
      }
    }
  }
});


