import Ember from 'ember';

export default Ember.ObjectController.extend({
  isMe: function(){
    //no idea why an Ember.computed.equal isn't working here
    if(this.get('content.id') === this.get('session.currentUser.id')){
      return true;
    }
  }.property('content.id', 'session.currentUser.id'),
  pairingSort: ['startDate:desc'],
  sortedPairings: Ember.computed.sort('pairings', 'pairingSort'),

  actions: {
    update: function(){
      this.get('content').save();
    }
  }
});
