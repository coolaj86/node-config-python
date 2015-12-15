'use strict';
//var pyconf = require('pyconf');
var pyconf = require('./');

pyconf.readFile('example.conf', function (err, obj) {
  if (err) {
    console.error(err.stack);
    return;
  }

  pyconf.writeFile('example.conf.new', obj, function (err) {
    if (err) {
      console.error(err.stack);
      return;
    }

    console.log("Run this command to check that the outputs are the same:");
    console.log("  diff example.conf example.conf.new");
  });
});
