import Ember from 'ember';
/* global moment */
function formatDate(value, format) {
  return moment(value).format(format);
}

export {
  formatDate
};

export default Ember.Handlebars.makeBoundHelper(formatDate);

