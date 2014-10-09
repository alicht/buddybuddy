import Ember from 'ember';

export default Ember.ObjectController.extend({
  today: new Date(),
  
  buddies: function(){
    if (this.get('users.length') > 0){
      var length = this.get('users.length') - 1;

      return this.get('users').map(function(user, i) {
        return {
          name: user.get('isMe') ? 'You' : user.get('name'),
          heart: i < length 
        };
      });
    }
  }.property('content.users.length')
});
