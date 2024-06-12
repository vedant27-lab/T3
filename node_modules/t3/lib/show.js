(function() {
  var fs, log, path, tilde, walk;

  path = require('path');

  fs = require('fs-extra');

  tilde = require('tilde-expansion');

  log = console.log;

  walk = require('walk');

  module.exports = function() {
    var _this = this;

    return tilde('~', function(home) {
      var dir, files, walker;

      dir = home + '/.t3';
      files = [];
      console.log(dir);
      walker = walk.walk(dir, {
        followLinks: false
      });
      walker.on("file", function(root, stat, next) {
        if (stat.name !== 't3.json') {
          files.push(root + "/" + stat.name);
        }
        return next();
      });
      return walker.on("end", function() {
        var file, _i, _len, _results;

        console.log(files);
        _results = [];
        for (_i = 0, _len = files.length; _i < _len; _i++) {
          file = files[_i];
          _results.push(fs.readJson(file, function(err, object) {
            return console.log(object);
          }));
        }
        return _results;
      });
    });
  };

}).call(this);
