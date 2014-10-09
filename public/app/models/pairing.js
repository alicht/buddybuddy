import DS from 'ember-data';

var Pairing = DS.Model.extend({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  users: DS.hasMany('user', {async: true}),
  logs: DS.hasMany('log', {async: true}),

  primaryUser: Ember.computed.alias('users.firstObject'),
	secondaryUser: Ember.computed.alias('users.lastObject')
});

var fixtures = [];
var dates = [
  ['2014/10/06', '2014/10/10'],
  ['2014/10/13', '2014/10/17'],
  ['2014/10/20', '2014/10/24']
];
dates.forEach(function(d, i){
  fixtures.push({id: fixtures.length+1, users: [1, 2], logs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], startDate: new Date(d[0]), endDate: new Date(d[1])});
});
dates.forEach(function(d, i){
  fixtures.push({id: fixtures.length+1, users: [3, 4], logs: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], startDate: new Date(d[0]), endDate: new Date(d[1])});
});

console.log( 'pairings: ', fixtures );

Pairing.reopenClass({
  FIXTURES: fixtures
});

export default Pairing;

