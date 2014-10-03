import DS from 'ember-data';

var Pairing = DS.Model.extend({
  primaryUser: DS.belongsTo('user', {async: true, inverse: 'primaryPairings'}),
  secondaryUser: DS.belongsTo('user', {async: true, inverse: 'secondaryPairings'}),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  logs: DS.hasMany('log', {async: true})
});

Pairing.reopenClass({
  FIXTURES: [
    { id: 1, primaryUser: 1, secondaryUser: 2, startDate: new Date('2014-09-16'), endDate: new Date('2014-09-20'), logs: [1,2,3]},
    { id: 2, primaryUser: 3, secondaryUser: 4, startDate: new Date('2014-09-16'), endDate: new Date('2014-09-20'), logs: [4,5]},
    { id: 3, primaryUser: 1, secondaryUser: 3, startDate: new Date('2014-09-23'), endDate: new Date('2014-09-27'), logs: [6,7,8,9,10]}
  ]
});

export default Pairing;
