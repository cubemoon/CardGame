/**
 * Created by flan on 2014/9/15.
 */
var pomelo = require('pomelo');
var bearcat = require('bearcat');

var Code = function(jsonPath) {
    var utils = bearcat.getBean('com.base.utils');
    var code = require(pomelo.app.getBase()+'/'+jsonPath);
    for(var key in code) {
        this[key] = code[key];
    }
};

module.exports = Code;