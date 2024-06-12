(function() {
  module.exports = {
    init: function() {
      return require('./init')();
    },
    start: function() {
      return require('./start')();
    },
    create: function(args) {
      return require('./sheet')(args);
    },
    s: function(args) {
      return require('./sheet')(args);
    },
    sheet: function(args) {
      return require('./sheet')(args);
    },
    "in": function(args) {
      return require('./in')(args);
    },
    out: function(args) {
      return require('./out')(args);
    },
    show: function() {
      return require('./show')();
    }
  };

}).call(this);
