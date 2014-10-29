import Ember from 'ember';

export default Ember.Controller.extend({

  groupedPairings: function(){
    var result = [];
    var group = 'pairingDates';
  
    this.get('content').forEach(function(item){
      var hasGroup = !!result.findBy('group', item.get(group));

      if (!hasGroup) {
        result.pushObject(Ember.Object.create({
          group: item.get(group),
          content: []
        }));
      }

      result.findBy('group', item.get(group)).get('content').pushObject(item);
    });

    return result;
  }.property('content.@each.pairingDates')
});
