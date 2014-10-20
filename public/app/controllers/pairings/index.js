import Ember from 'ember';

export default Ember.Controller.extend({
  pairingsByDates: function(){
    var self = this;
    var arr = this.get('content').map(function(pairing){
      return pairing.get('pairingDates');
    }).uniq();
    var result = [];

    arr.forEach(function(sdate, i){
      result[i] = { date: sdate, pairings: [] };

      self.get('content').forEach(function(pairing){
        if (sdate == pairing.get('pairingDates')){
          result[i].pairings.push(pairing);
        }
      });
    });

    return result;
  }.property('content'),

  actions: {
    generate: function(){
      var date = this.get('date');
      var self = this;
      alert('generate for date: ' + date);
      Ember.$.getJSON('/api/pairings?generate=true&date='+date).then(function(response){
        var newParings = self.store.pushPayload('pairing', response);
        alert('Generated!');
      });
    }
  }
});
