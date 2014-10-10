import DS from 'ember-data';

var Log = DS.Model.extend({
  message: DS.attr('string'),
  createdAt: DS.attr('date'),
  user: DS.belongsTo('user', {async: true}),
  pairing: DS.belongsTo('pairing', {async: true})
});

var fixtures = [];
var dates = [
  ['2014/9/22', '2014/9/23', '2014/9/24', '2014/9/25', '2014/9/26'],
  ['2014/9/29', '2014/9/30', '2014/10/1', '2014/10/2', '2014/10/3'],
  ['2014/10/06', '2014/10/07', '2014/10/08']
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

Log.reopenClass({
  FIXTURES: fixtures
});

export default Log;
