import DS from 'ember-data';

var Pairing = DS.Model.extend({
  primaryUser: DS.attr('user'),
  secondaryUser: DS.attr('user'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date')
});

Pairing.reopenClass({
  FIXTURES: [
    { id: 1, primaryUserId: 1, secondaryUserId: 2, startDate: '2014-09-22', endDate: '2014-09-26'}
  ]
});

export default Pairing;