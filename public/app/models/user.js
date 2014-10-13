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

User.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Charlie', pairings: [1,2,3] },
    { id: 2, name: 'Andre', pairings: [1,2,3] },
    { id: 3, name: 'Nick', pairings: [4,5,6] },
    { id: 4, name: 'Heyjin', pairings: [4,5,6] }
  ]
});
export default User;

