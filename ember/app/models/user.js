import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  checkedin: DS.attr('boolean'),
  pairings: DS.hasMany('pairing', {async: true}),

  screenName: Ember.computed.alias('name')
});

export default User;

