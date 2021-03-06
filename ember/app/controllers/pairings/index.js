import Ember from 'ember';


export default Ember.ArrayController.extend({
  sortProperties: ['startDate'],
  sortAscending: false,

  groupedPairings: function(){
    var result = [];
    var group = 'pairingDates';
  
    this.get('arrangedContent').forEach(function(item, i){
      var hasGroup = !!result.findBy('group', item.get(group));

      if (!hasGroup) {
        result.pushObject(Ember.Object.create({
          group: item.get(group),
          index: i,
          content: []
        }));
      }

      result.findBy('group', item.get(group)).get('content').pushObject(item);
    });

    return result;
  }.property('content.@each.pairingDates')
});
