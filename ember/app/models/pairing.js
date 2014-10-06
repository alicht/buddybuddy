import DS from 'ember-data';

var Pairing = DS.Model.extend({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  users: DS.hasMany('user', {async: true}),
  logs: DS.hasMany('log', {async: true}),

  primaryUser: Ember.computed.alias('users.firstObject'),
	secondaryUser: Ember.computed.alias('users.lastObject')
});

Pairing.reopenClass({
  FIXTURES: [
    { id: 1, users: [1, 2], startDate: new Date('2014-09-16'), endDate: new Date('2014-09-20'), logs: [1,2,3]},
    { id: 2, users: [2, 3], startDate: new Date('2014-09-16'), endDate: new Date('2014-09-20'), logs: [4,5]},
    { id: 3, users: [1, 3], startDate: new Date('2014-09-23'), endDate: new Date('2014-09-27'), logs: [6,7,8,9,10]}
  ]
});

export default Pairing;


