import Ember from 'ember';

export default Ember.ObjectController.extend({
  logMessage: null,
  isCheckedInToday: Ember.computed.or('content.isEnded', 'session.currentUser.checkedin'),
  logsSorting: ['createdAt:desc'],
  sortedLogs: Ember.computed.sort('logs', 'logsSorting'),
  hasMe: function(){
    if(this.get('buddies.length')){
      return this.get('buddies').mapProperty('id').contains(this.get('content.session.currentUser.id'));
    }
  }.property('buddies.@each', 'content.session.currentUser')
});
