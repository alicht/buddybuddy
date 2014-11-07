import Ember from 'ember';

export default Ember.Component.extend({
  favorited: function(){
    var userId = this.get('currentUser.id');
    return this.get('content').any(function(fav){
      return fav.get('user.id') === userId;
    });
  }.property('content.@each.user.isLoaded'),

  actions: {
    favorite: function(log){
      this.sendAction('action', log);
    },

    toggleList: function(){
      this.toggleProperty('isShow');
    }
  }
});
