import Ember from 'ember';

export default Ember.ObjectController.extend({
  today: new Date(),
  
  isCheckedIn: function(){
 

    if (this.get('logs.isFulfilled') && this.get('logs.length') > 0){
      var last = this.get('logs').sortBy('createdAt').get('lastObject');
      return new Date().toDateString()===last.get('createdAt').toDateString();
    }else{
      return false;
    }
  }.property('logs.length')
});
