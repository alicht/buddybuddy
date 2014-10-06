import DS from 'ember-data';

var Log = DS.Model.extend({
  message: DS.attr('string'),
  date: DS.attr('date'),
  user: DS.belongsTo('user', {async: true}),
  pairing: DS.belongsTo('pairing', {async: true})
});

Log.reopenClass({
  FIXTURES: [
    { id: 1, user: 1, pairing: 1, date: new Date("2014/09/16"), message: 'Hello world'},
    { id: 2, user: 2, pairing: 1, date: new Date("2014/09/17"), message: 'Brian does lots of hard things'},
    { id: 3, user: 2, pairing: 1, date: new Date("2014/09/20"), message: 'Charlie has a very easy job'},
    { id: 4, user: 3, pairing: 2, date: new Date("2014/09/18") },
    { id: 5, user: 4, pairing: 2, date: new Date("2014/09/19") },
    { id: 6, user: 1, pairing: 3, date: new Date("2014/09/23") },
    { id: 7, user: 1, pairing: 3, date: new Date("2014/09/24") },
    { id: 8, user: 1, pairing: 3, date: new Date("2014/09/25") },
    { id: 9, user: 1, pairing: 3, date: new Date("2014/09/26") },
    { id: 10, user: 1, pairing: 3, date: new Date("2014/09/27"), message: 'Talked about Buddy Buddy!' }
  ]
});

export default Log;
