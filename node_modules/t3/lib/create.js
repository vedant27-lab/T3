(function() {
  var fs, path, tilde;

  path = require('path');

  fs = require('fs-extra');

  tilde = require('tilde-expansion');

  module.exports = function(args) {
    return tilde('~/', function(home) {
      var fileName,
        _this = this;

      fileName = home + '.t3/' + args[0] + '.json';
      return fs.exists(fileName, function(exists) {
        if (exists) {
          return console.warn("Sheet " + args[0] + " already exists here: " + fileName);
        } else {
          return fs.writeJson(fileName, [], function(err) {
            err && (function() {
              throw err;
            })();
            return console.log("Sheet " + args[0] + " created here: " + fileName);
          });
        }
      });
    });
  };

}).call(this);
