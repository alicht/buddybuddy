import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  pairings: DS.hasMany('pairing', {async: true})
});

User.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Charlie', pairings: [1, 3] },
    { id: 2, name: 'Brian', pairings: [1, 2] },
    { id: 3, name: 'Heyjin', pairings: [2, 3] },
    { id: 4, name: 'André' }
  ]
});
export default User;

