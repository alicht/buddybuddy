import Ember from 'ember';
import startApp from 'buddybuddy/tests/helpers/start-app';
import Pretender from 'pretender';

var App, server;

module('Integration - Landing Page', {
  setup: function() {
    App = startApp();

    var favorite = { id: 1, log_id: 1, user_id: 1, str_user_id: '1' };
    var logs = [{
      id: 1, user_id: 1, pairing_id: 1, message: 'hello', created_at: '2014-11-03T15:04:58.442Z',
      links: { favorites: "/api/favorites?log_id=1" }
    }];

    server = new Pretender(function() {
      this.get('/api/logs', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({logs: logs})];
      });

      this.get('/api/favorites', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({favorites: []})];
      });

      this.post('/api/favorites', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({favorite: favorite})];
      });
    });
  },

  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('smoke test', function(){
  visit('/');

  andThen(function(){
    equal(find('header').length, 1);
    equal(find('a.buddybuddy-logo').length, 1);
    equal(find('nav ul').length, 1);
    equal(find('.checkins').length, 1);
  });
});

test('should display check-in list', function(){
  visit('/');

  andThen(function(){
    equal(find('.checkins article').length, 1);
    equal(find('.checkins article .message').text(), 'hello');
    equal(find('.checkins article .date').text(), 'Monday, November 03');
  });
});

test('favorite a check-in', function(){
  visit('/');

  andThen(function(){
    equal(find('.favorites b').length, 0);

    click('.checkins article button');
    andThen(function(){
      equal(find('.favorites b').length, 1);
      equal(find('.favorites b').text(), 1);
    });    
  });
});
