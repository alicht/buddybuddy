import Ember from 'ember';
import startApp from 'buddybuddy/tests/helpers/start-app';
import Pretender from 'pretender';

var App, server;

module('Integration - Landing Page', {
  setup: function() {
    App = startApp();
    var logs = [{
        id: 1,
        user_id: 1,
        pairing_id: 1,
        message: null,
        created_at: "2014-11-03T15:04:58.442Z",
        links: {
          favorites: "/api/favorites?log_id=1"
        }
      }];

    server = new Pretender(function() {
      this.get('/api/logs', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({logs: logs})];
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
    equal(find('section.checkins').length, 1);
  });
});

test('display log list', function(){
  visit('/');

  andThen(function(){
    equal(find('section.checkins article').length, 1);
  });
});
