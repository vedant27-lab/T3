(function() {
  var fs, path, tilde;

  path = require('path');

  fs = require('fs-extra');

  tilde = require('tilde-expansion');

  module.exports = function() {
    return tilde('~/', function(home) {
      var t3,
        _this = this;

      t3 = {
        directory: home,
        currentSheet: ''
      };
      return fs.mkdirs(home + '/.t3', function(err) {
        err && (function() {
          throw err;
        })();
        return fs.writeJson(home + '.t3/t3.json', t3, function(err) {
          err && (function() {
            throw err;
          })();
          return console.log("T3 is ready to be used.");
        });
      });
    });
  };

}).call(this);
