import DS from 'ember-data';

var Favorite = DS.Model.extend({
  user: DS.belongsTo('user', {async: true}),
  log: DS.belongsTo('pairing', {async: true})
});

export default Favorite;
