import DS from 'ember-data';

var Pairing = DS.Model.extend({
  primaryUser: DS.belongsTo('user'),
  secondaryUser: DS.belongsTo('user'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date')
});

Pairing.reopenClass({
  FIXTURES: [
    { id: 1, primaryUser: 1, secondaryUser: 2, startDate: '2014-09-22', endDate: '2014-09-26'}
  ]
});

export default Pairing;