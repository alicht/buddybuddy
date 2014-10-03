import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr(),
  primaryPairings: DS.hasMany('pairing', {inverse: 'primaryUser'}),
  secondaryPairings: DS.hasMany('pairing', {inverse: 'secondaryUser'})
});

User.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Charlie' },
    { id: 2, name: 'Brian' },
    { id: 3, name: 'Heyjin' },
    { id: 4, name: 'André' }
  ]
});
export default User;

