import Ember from 'ember';
import startApp from 'buddybuddy/tests/helpers/start-app';

var App;

module('Integration - Landing Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('', function(){
  visit('/');
  andThen(function(){
    equal(find('header').length, 1);
    equal(find('a.buddybuddy-logo').length, 1);
    equal(find('nav ul').length, 1);
    equal(find('section.checkins').length, 1);
  });
});

