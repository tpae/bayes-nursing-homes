
define([
  'collections/Base',
  'models/Coordinate'
], function(Base, Coordinate) {
  var Marker = Base.extend({
    url: '',

    render: function(map) {
      this.setAllMap(map);
    },

    setAllMap: function(map) {
      if (!this.markers) {
        this.markers = this.toMarkerCollection();
      }
      
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(map);
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