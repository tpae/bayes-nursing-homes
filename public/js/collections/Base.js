
define([
  'backbone',
  'models/Coordinate'
], function(Backbone, Coordinate) {
  var Base = Backbone.Collection.extend({
    model: function(attrs, options) {
      return new Coordinate(attrs, options);
    },
    
    url: '',

    toGeoWeightCollection: function() {
      var results = [];

      this.models.forEach(function(model) {
        results.push(model.toGeoWeight());
      });

      return results;
    },

    render: function(map) {
      // must implement
    }
  });

  return Base;
});