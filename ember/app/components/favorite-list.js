import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  
  actions: {
    toggleList: function(){
      this.toggleProperty('isShow');
    }
  }
});
