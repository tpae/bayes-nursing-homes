
define([
  'underscore',
  'collections/Heatmap',
  'collections/Marker',
  'modules/Query'
], function(_, Heatmap, Marker, Query) {
  function Factory(map, query) {
    this.map = map;

    // different types of collections
    this.types = {
      'heatmap': Heatmap,
      'marker': Marker
    };

    // list of collections
    this.collections = {};

    this.query = query;

    return this;
  }

  Factory.prototype.build = function(query) {
    var self = this;
    var results = this.query.set(query);

    this.hideAll();
    
    for(var i = 0; i < results.length; i++) {
      if (this.collections[results[i].key]) {
        this.collections[results[i].key].render(this.map.instance);
      } else {
        this.collections[results[i].key] = new this.types[results[i].type]({
          url: '/api/csv?file=' + results[i].type + '-' + results[i].name,
          colors: $('[data-key="' + results[i].key + '"]').data('colors'),
          radius: $('[data-key="' + results[i].key + '"]').data('radius')
        });

        this.collections[results[i].key].fetch();

        this.collections[results[i].key].on('sync', function() {
          this.render(self.map.instance);
        });
      }
    }

    return this.collections;
  };

  Factory.prototype.hideAll = function() {
    _.each(this.collections, function(collection) {
      collection.render(null);
    });
  }

  return Factory;
});