import DS from 'ember-data';
/* global moment */

var Pairing = DS.Model.extend({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  users: DS.hasMany('user', {async: true}),
  logs: DS.hasMany('log', {async: true}),

  isEnded: function(){
    return +this.get('endDate') <= +moment().toDate();
  }.property('endDate'),

  pairingDates: function(){
    return moment( this.get('startDate') ).format('MMMM DD, YYYY') + ' - ' +
           moment( this.get('endDate') ).format('MMMM DD, YYYY');
  }.property('startDate', 'endDate'),

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

export default Pairing;

