/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: {
    enabled: false
  }
});
var index = app.legacyFilesToAppend.indexOf('bower_components/handlebars/handlebars.runtime.js');
if(index) {
  app.legacyFilesToAppend[index] = 'bower_components/handlebars/handlebars.js';
}

// Moment
app.import('bower_components/moment/moment.js');

//Sass
var compileSass = require('broccoli-sass');


// Bootstrap
app.import('bower_components/bootstrap/dist/css/bootstrap.css');

// Glyphicons
var pickFiles = require('broccoli-static-compiler');
var bootstrapFonts = pickFiles('bower_components/bootstrap/fonts', {
  srcDir: '/',
  destDir: '/fonts'
});

module.exports = app.toTree(bootstrapFonts);
