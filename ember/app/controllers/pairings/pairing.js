import Ember from 'ember';

export default Ember.ObjectController.extend({
  logMessage: null,
  isCheckedInToday: Ember.computed.or('content.isEnded', 'session.currentUser.checkedin')
});
