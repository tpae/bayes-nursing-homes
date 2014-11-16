
var path = require('path');
var fs = require('fs');
var parse = require('csv').parse;

function CSV(file) {
  this.path = path.join(__dirname, '..', '/data/' + file);
}

CSV.prototype.parse = function(cb) {
  var parser = parse({columns: true}, cb);
  fs.createReadStream(this.path).pipe(parser);
};

module.exports = function(file) {
  return new CSV(file);
};