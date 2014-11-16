
define([
  'collections/Heatmap',
  'collections/Marker'
], function(Heatmap, Marker) {
  function Factory(map, query) {
    this.map = map;
    this.query = query;

    // different types of collections
    this.types = {
      'heatmap': Heatmap,
      'marker': Marker
    };

    // list of collections
    this.collections = {};

    return this;
  }

  Factory.prototype.setQuery = function(query) {
    this.query = query;

    return this;
  };

  Factory.prototype.build = function() {
    var self = this;
    var results = this.parse();

    // empty existing collections
    this.collectons = {};

    for(var i = 0; i < results.length; i++) {
      this.collections[results[i].key] = new this.types[results[i].type]({
        url: '/csv?file=nurse_home_viz.csv'
      });

      this.collections[results[i].key].fetch();

      this.collections[results[i].key].on('sync', function() {
        this.render(self.map.instance);
      });
    }

    return this.collections;
  };

  Factory.prototype.parse = function() {
    var components = this.query.split(';');

    var results = [];
    for(var i = 0; i < components.length; i++) {
      var component = components[i].split(':');
      results.push({ key: components[i], type: component[0], name: component[1] });
    }

    return results;
  };

  return Factory;
});