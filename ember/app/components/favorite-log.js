import Ember from 'ember';

export default Ember.Component.extend({
  favorited: function(){
    var userId = this.get('currentUser.id');
    return this.get('favorites').any(function(fav){
      return fav.get('strUserId') === userId;
    });
  }.property('favorites.@each.user'),

  actions: {
    favorite: function(log){
      this.sendAction('action', log, this.get('favorited'));
    },

    toggleList: function(){
      this.toggleProperty('isShow');
    }
  }
});


