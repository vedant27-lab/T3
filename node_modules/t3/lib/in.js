(function() {
  var fs, log, path, tilde;

  path = require('path');

  fs = require('fs-extra');

  tilde = require('tilde-expansion');

  log = console.log;

  module.exports = function(args) {
    var _this = this;

    return tilde('~', function(home) {
      var dir, fileName;

      dir = home + '/.t3/';
      fileName = dir + 't3.json';
      log('settings json location');
      log(fileName);
      return fs.readJson(fileName, function(err, t3Object) {
        var sheet, sheetLocation;

        err && (function() {
          throw err;
        })();
        log('current sheet from settings');
        log(t3Object);
        sheet = t3Object.currentSheet;
        console.log(sheet);
        sheetLocation = dir + sheet + '.json';
        log('location of current sheet');
        console.log(sheetLocation);
        return fs.readJson(sheetLocation, function(err, sheetObject) {
          var itemObject, newId;

          err && (function() {
            throw err;
          })();
          log('json object of current sheet');
          console.log(sheetObject);
          newId = parseInt(sheetObject.lastId);
          console.log(newId);
          if (args[0] === void 0) {
            args[0] = "unknown";
          }
          itemObject = {
            id: newId + 1,
            note: args[0],
            start: Date.now(),
            end: false
          };
          sheetObject.items.push(itemObject);
          sheetObject.lastId = newId + 1;
          return fs.writeJson(sheetLocation, sheetObject, function(err) {
            log(itemObject);
            return console.log("New task in " + sheet + " started");
          });
        });
      });
    });
  };

}).call(this);
