import Ember from 'ember';

export default Ember.ObjectController.extend({
  pairingSort: ['startDate:desc'],
  sortedPairings: Ember.computed.sort('pairings', 'pairingSort'),
});
