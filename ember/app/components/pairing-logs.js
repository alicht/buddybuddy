import Ember from 'ember';

export default Ember.Component.extend({
  init: function(){
    this.set('isShow', this.get('index') === 0);
    this._super();
  },

  actions: {
    togglePairings: function(){
      this.toggleProperty('isShow');
    }
  }
});
