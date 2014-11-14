import Ember from 'ember';
import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  currentPassword: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),

  checkedin: DS.attr('boolean'),
  pairings: DS.hasMany('pairing', {async: true}),
  favorites: DS.hasMany('favorite', {async: true})
});

export default User;

