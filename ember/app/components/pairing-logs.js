import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    togglePairings: function(){
      this.toggleProperty('isShow');
    }
  }
});
