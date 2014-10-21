import DS from 'ember-data';

var Log = DS.Model.extend({
  message: DS.attr('string'),
  createdAt: DS.attr('date'),
  user: DS.belongsTo('user', {async: true}),
  pairing: DS.belongsTo('pairing', {async: true})
});

export default Log;
