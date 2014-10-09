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
  fixtures.push( { id: fixtures.length+1, user: 1, pairing: 1, created_at: new Date(d) } );
});
dates[1].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 1, pairing: 1, created_at: new Date(d) } );
});
dates[2].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 1, pairing: 1, created_at: new Date(d) } );
});

dates[0].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 1, pairing: 2, created_at: new Date(d) } );
});
dates[1].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 1, pairing: 2, created_at: new Date(d) } );
});
dates[2].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 1, pairing: 2, created_at: new Date(d) } );
});

dates[0].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 2, pairing: 3, created_at: new Date(d) } );
});
dates[1].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 2, pairing: 3, created_at: new Date(d) } );
});
dates[2].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 2, pairing: 3, created_at: new Date(d) } );
});

console.log(fixtures.map(function(m){return m.id;}));

dates[0].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 3, pairing: 4, created_at: new Date(d) } );
});
dates[1].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 3, pairing: 4, created_at: new Date(d) } );
});
dates[2].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 3, pairing: 4, created_at: new Date(d) } );
});

dates[0].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 4, pairing: 5, created_at: new Date(d) } );
});
dates[1].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 4, pairing: 5, created_at: new Date(d) } );
});
dates[2].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 4, pairing: 5, created_at: new Date(d) } );
});

dates[0].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 4, pairing: 6, created_at: new Date(d) } );
});
dates[1].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 4, pairing: 6, created_at: new Date(d) } );
});
dates[2].forEach(function(d){
  fixtures.push( { id: fixtures.length+1, user: 4, pairing: 6, created_at: new Date(d) } );
});

console.log(fixtures.map(function(m){return m.id;}));

console.log('logs: ', fixtures)

Log.reopenClass({
  FIXTURES: fixtures
});

export default Log;
