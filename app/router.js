import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function() { });
  this.resource('pairing', {path: 'pairings/:pairing_id'})
  this.resource('pairings', function() { });
  this.route('pairings/pairing');
});

export default Router;
