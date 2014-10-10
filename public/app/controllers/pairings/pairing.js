import Ember from 'ember';

export default Ember.ObjectController.extend({
  today: new Date(),
  
  isCheckedIn: function(){
    if (this.get('logs.isFulfilled') && this.get('logs.length') > 0){
      var last = this.get('logs').sortBy('createdAt').get('lastObject');
      var a = moment(new Date());
      var b = moment(last.get('createdAt'));
      return a.diff(b, 'days') === 0;
    }else{
      return false;
    }
  }.property('logs.length'),

  buddies: function(){
    if (this.get('users.isFulfilled') && this.get('users.length') > 0){
      var length = this.get('users.length') - 1;

      return this.get('users').map(function(user, i) {
        return {
          name: user.get('screenName'),
          heart: i < length 
        };
      });
    }
  }.property('users.length')
});
