
define([
  'backbone',
  'models/Coordinate'
], function(Backbone, Coordinate) {

  var Base = Backbone.Collection.extend({
    model: function(attrs, options) {
      return new Coordinate(attrs, options);
    },
    
    url: '/csv?file=nurse_home_viz.csv',

    toGeoCollection: function() {
      var results = [];

      this.models.forEach(function(model) {
        results.push(model.toGeoCoordinate());
      });

      return results;
    },

    render: function(map) {
      if (!this.heatmap) {
        this.heatmap = this.getHeatmap();
      }

      this.heatmap.setMap(map);
    },

    getHeatmap: function() {
      return new google.maps.visualization.HeatmapLayer({
        data: new google.maps.MVCArray(this.toGeoCollection())
      });
    }
  });

  return Base;
});