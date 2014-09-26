import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr()
});

User.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Charlie' },
    { id: 2, name: 'Brian' }
  ]
});
export default User;

