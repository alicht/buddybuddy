import Ember from 'ember';

export default Ember.ObjectController.extend({
  pairingSort: ['startDate:desc'],
  sortedPairings: Ember.computed.sort('pairings', 'pairingSort'),

  actions: {
    updateName: function(){
      this.get('content').save();
    }
  }
});
