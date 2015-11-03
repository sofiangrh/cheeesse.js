var glob = require('glob')
var fs = require('fs')
var marked = require('marked')
var hbs = require('handlebars')
var mkdirp = require('mkdirp')
var path = require('path')
var cpr = require('cpr')

cpr('./demos', './site/demos', function(err, files) {
  if (err) return console.log(err)
  cpr('./js', './site/js', function(err, files) {
    if (err) return console.log(err)
  })
})
