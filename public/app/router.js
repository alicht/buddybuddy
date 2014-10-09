import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('login');
  
  this.resource('users', function() { 
  	this.route('user', {path: ':user_id'});
  });
  
  this.resource('pairings', function() { 
  	this.route('pairing', {path: ':pairing_id'});
  });

  this.resource('logs', function() { 
    this.route('log', {path: ':logs_id'});
  });
});

export default Router;
