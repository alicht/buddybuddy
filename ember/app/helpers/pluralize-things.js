import Ember from 'ember';

function pluralizeThings(count, singular, plural) {
  return count + ' ' + (count===1 ? singular : plural); 
}

export {
  pluralizeThings
};

export default Ember.Handlebars.makeBoundHelper(pluralizeThings);