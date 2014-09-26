import DS from 'ember-data';

var Log = DS.Model.extend({
  message: DS.attr('string'),
  date: DS.attr('date'),
  user: DS.belongsTo('user', {async: true}),
  pairing: DS.belongsTo('pairing', {async: true})
});

Log.reopenClass({
  FIXTURES: [
    { id: 1, userId: 1, pairingId: 1,  message: 'Hello world', date: Date.parse("2014/09/01") },
    { id: 2, userId: 1, pairingId: 1, message: 'Brian does lots of hard things', date: Date.parse("2014/09/02")},
    { id: 3, userId: 2, pairingId: 1, message: 'Charlie has a very easy job', date: Date.parse("2014/09/02") }
  ]
});

export default Log;
