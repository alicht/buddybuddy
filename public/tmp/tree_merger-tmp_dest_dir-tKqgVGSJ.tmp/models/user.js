import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  pairings: DS.hasMany('pairing', {async: true})
});

User.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Charlie', pairings: [1,2,3] },
    { id: 2, name: 'Andre', pairings: [1,2,3] },
    { id: 3, name: 'Nick', pairings: [4,5,6] },
    { id: 4, name: 'Heyjin', pairings: [4,5,6] }
  ]
});
export default User;

