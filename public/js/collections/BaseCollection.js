
define([
  'backbone',
  'models/Coordinate'
], function(Backbone, Coordinate) {
  
  var Base = Backbone.Collection.extend({
    model: function(attrs, options) {
      return new Coordinate(attrs, options);
    },
    
    url: '/csv?file=nurse_home_viz.csv',

    toGeoData: function() {
      var results = [];

      this.models.forEach(function(model) {
        results.push(model.toGeoData());
      });

      return results;
    },

    getHeatmap: function() {
      return new google.maps.visualization.HeatmapLayer({
        data: new google.maps.MVCArray(this.toGeoData())
      });
    }
  });

  return Base;
});