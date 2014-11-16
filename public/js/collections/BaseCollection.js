
define([
  'backbone',
  'models/Coordinate'
  ], function(Backbone, Coordinate) {

  var Base = Backbone.Collection.extend({
    model: Coordinate,
    url: '/csv?file=nurse_home_viz.csv',
    toGeoData: function() {
      var results = [];
      
      this.models.forEach(function(model) {
        results.push(model.toGeoData());
      });

      return results;
    }
  });

  return Base;
});