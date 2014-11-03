import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  currentPassword: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),

  checkedin: DS.attr('boolean'),
  pairings: DS.hasMany('pairing', {async: true}),

  screenName: Ember.computed.alias('name'),

  isMe: function(){
    if(this.get('id') === this.session.get('currentUser.id')){
      return true;
    } else {
      return false;
    }
  }.property('content.id', 'session.currentUser.id'),
});

export default User;

