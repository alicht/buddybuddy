import DS from 'ember-data';
/* global moment */
export default DS.FixtureAdapter.extend({
  queryFixtures: function(fixtures, query) {
    return fixtures.filter(function(item){
      return (item.primaryUser === query.userId || item.secondaryUser === query.userId) && 
        (moment(item.startDate).isBefore(query.date) || moment(item.startDate).isSame(query.date) && moment(item.endDate).isAfter(query.date) || moment(item.endDate).isSame(query.date));
    });
  }
});
