(function() {
  var fs, path, tilde;

  path = require('path');

  fs = require('fs-extra');

  tilde = require('tilde-expansion');

  module.exports = function(args) {
    return tilde('~/', function(home) {
      var _this = this;

      return fs.readJson(home + '.t3/t3.json', function(err, t3Object) {
        var fileName;

        console.log(t3Object);
        fileName = home + '.t3/' + args[0] + '.json';
        return fs.exists(fileName, function(exists) {
          var object;

          if (exists) {
            t3Object.currentSheet = args[0];
            return fs.writeJson(home + '.t3/t3.json', t3Object, function(err) {
              return console.log("Switched to sheet " + args[0]);
            });
          } else {
            object = {
              lastId: 0,
              items: []
            };
            return fs.writeJson(fileName, object, function(err) {
              err && (function() {
                throw err;
              })();
              t3Object.currentSheet = args[0];
              return fs.writeJson(home + '.t3/t3.json', t3Object, function(err) {
                console.log("Switched to sheet " + args[0]);
                return console.log("Sheet " + args[0] + " created here: " + fileName);
              });
            });
          }
        });
      });
    });
  };

}).call(this);
