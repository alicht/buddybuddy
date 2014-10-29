/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
});
var index = app.legacyFilesToAppend.indexOf('bower_components/handlebars/handlebars.runtime.js');
if(index) {
  app.legacyFilesToAppend[index] = 'bower_components/handlebars/handlebars.js';
}

// Moment
app.import('bower_components/moment/moment.js');

//Sass
var compileSass = require('broccoli-sass');


// Glyphicons
var pickFiles = require('broccoli-static-compiler');
var bootstrapFonts = pickFiles('bower_components/bootstrap/fonts', {
  srcDir: '/',
  destDir: '/fonts'
});

var extraFonts = pickFiles('app/styles/fonts', {
  srcDir: '/',
  files: ['*'],
  destDir: '/fonts'
});

var extraImages = pickFiles('app/styles/images', {
  srcDir: '/',
  files: ['*'],
  destDir: '/images'
});

var mergeTrees = require('broccoli-merge-trees');

var output = mergeTrees([extraFonts, extraImages, bootstrapFonts]);

module.exports = app.toTree(output);
