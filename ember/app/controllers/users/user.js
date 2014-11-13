import Ember from 'ember';

export default Ember.ObjectController.extend({
  pairingSort: ['startDate:desc'],
  sortedPairings: Ember.computed.sort('pairings', 'pairingSort'),

  actions: {
    update: function(){
      this.get('content').save();
    }
  }
});
