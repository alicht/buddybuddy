import DS from 'ember-data';

var Pairing = DS.Model.extend({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  users: DS.hasMany('user', {async: true}),
  logs: DS.hasMany('log', {async: true}),

  pairingDates: function(){
    return moment( this.get('startDate') ).format('MMM DD, YYYY') + ' - ' +
           moment( this.get('endDate') ).format('MMM DD, YYYY');
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
