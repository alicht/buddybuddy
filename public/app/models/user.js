import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  checkedin: DS.attr('boolean'),
  pairings: DS.hasMany('pairing', {async: true}),

  isMe: function(){
    return this.get('id') === this.get('currentUserService.user.id');
  }.property('currentUserService.user'),

  screenName: function(){
    return this.get('isMe') ? 'Me' : this.get('name');
  }.property('isMe')
});

export default User;

