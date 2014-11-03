import DS from 'ember-data';

var Log = DS.Model.extend({
  message: DS.attr('string'),
  createdAt: DS.attr('date'),
  user: DS.belongsTo('user', {async: true}),
  pairing: DS.belongsTo('pairing', {async: true}),
  favorites: DS.hasMany('favorite', {async: true}),

  favorited: function(){
    var userId = this.get('currentUserService.user.id');
    return this.get('favorites').any(function(fav){
      return fav.get('user.id') === userId;
    });
  }.property('favorites.length')
});

export default Log;
