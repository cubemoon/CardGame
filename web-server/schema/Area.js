// Generated by CoffeeScript 1.7.1
(function() {
  var Area, Schema;

  Schema = require('mongoose').Schema;

  Area = Schema({
    id: Number,
    name: String,
    state: {
      type: String,
      "enum": 'free busy full'.split(' ')
    }
  });

  module.exports = Area;

}).call(this);

//# sourceMappingURL=Area.map
