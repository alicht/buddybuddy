module('JSHint - routes');
test('routes/index.js should pass jshint', function() { 
  ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/index.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/index.js: line 5, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors'); 
});
