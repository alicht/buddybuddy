import Ember from 'ember';

export default Ember.Controller.extend({
  pairingsByDates: function(){
    var self = this;
    var arr = this.get('content').map(function(pairing){
      return pairing.get('pairingDates');
    }).uniq();
    var result = [];

    arr.forEach(function(sdate, i){
      result[i] = {date: sdate, pairings: []};

      self.get('content').forEach(function(pairing){
        if (sdate == pairing.get('pairingDates')){
          result[i].pairings.push(pairing);
        }
      });
    });

    return result;
  }.property('content')
});
