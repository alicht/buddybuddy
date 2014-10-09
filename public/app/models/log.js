import DS from 'ember-data';

var Log = DS.Model.extend({
  message: DS.attr('string'),
  createdAt: DS.attr('date'),
  user: DS.belongsTo('user', {async: true}),
  pairing: DS.belongsTo('pairing', {async: true})
});

var fixtures = [];
var users = [1,2,3,4]
var dates = [
  ['2014/10/06', '2014/10/07', '2014/10/08', '2014/10/09', '2014/10/10'],
  ['2014/10/13', '2014/10/14', '2014/10/15', '2014/10/16', '2014/10/17'],
  ['2014/10/20', '2014/10/21', '2014/10/22', '2014/10/23', '2014/10/24']
];

dates[0].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 1, pairing: 1, createdAt: new Date(d) } );
});
dates[0].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 2, pairing: 1, createdAt: new Date(d) } );
});

dates[1].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 1, pairing: 2, createdAt: new Date(d) } );
});
dates[1].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 2, pairing: 2, createdAt: new Date(d) } );
});

dates[2].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 1, pairing: 3, createdAt: new Date(d) } );
});
dates[2].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 2, pairing: 3, createdAt: new Date(d) } );
});

dates[0].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 3, pairing: 4, createdAt: new Date(d) } );
});
dates[0].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 4, pairing: 4, createdAt: new Date(d) } );
});

dates[1].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 3, pairing: 5, createdAt: new Date(d) } );
});
dates[1].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 4, pairing: 5, createdAt: new Date(d) } );
});

dates[2].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 3, pairing: 6, createdAt: new Date(d) } );
});
dates[2].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 4, pairing: 6, createdAt: new Date(d) } );
});

console.log('logs: ', fixtures)

Log.reopenClass({
  FIXTURES: fixtures
});

export default Log;
