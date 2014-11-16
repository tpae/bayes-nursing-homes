
define([
  'collections/Base',
  'models/Coordinate'
], function(Base, Coordinate) {
  var Marker = Base.extend({    
    url: '/csv?file=nurse_home_viz.csv',

    render: function(map) {
      this.setAllMap(map);
    },

    setAllMap: function(map) {
      var markers = this.toMarkerCollection();

      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    },

    toMarkerCollection: function() {
      var results = [];

      this.models.forEach(function(model) {
        results.push(model.toGeoMarker());
      });

      return results;
    },
  });

  return Marker;
});