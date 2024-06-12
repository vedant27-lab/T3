(function() {
  var fs, log, path, tilde, _;

  path = require('path');

  fs = require('fs-extra');

  tilde = require('tilde-expansion');

  log = console.log;

  _ = require('underscore');

  module.exports = function(args) {
    var _this = this;

    return tilde('~', function(home) {
      var dir, fileName;

      dir = home + '/.t3/';
      fileName = dir + 't3.json';
      return fs.readJson(fileName, function(err, t3Object) {
        var sheet, sheetLocation;

        err && (function() {
          throw err;
        })();
        sheet = t3Object.currentSheet;
        sheetLocation = dir + sheet + '.json';
        return fs.readJson(sheetLocation, function(err, sheetObject) {
          var item, lastId, _i, _len, _ref;

          err && (function() {
            throw err;
          })();
          lastId = parseInt(sheetObject.lastId);
          log(_.findWhere(sheetObject.items, {
            id: lastId
          }));
          _ref = sheetObject.items;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            item = _ref[_i];
            if (!(item.id === lastId)) {
              continue;
            }
            item.end = Date.now();
            console.log(item);
          }
          return fs.writeJson(sheetLocation, sheetObject, function(err) {
            return console.log("Task in " + sheet + " finished");
          });
        });
      });
    });
  };

}).call(this);
