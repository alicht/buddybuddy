module('JSHint - routes');
test('routes/logs.js should pass jshint', function() { 
  ok(false, 'routes/logs.js should pass jshint.\nroutes/logs.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/logs.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/logs.js: line 4, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors'); 
});
