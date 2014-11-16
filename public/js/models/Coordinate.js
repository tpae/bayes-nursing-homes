
define(['backbone'], function(Backbone) {
  var Coordinate = Backbone.Model.extend({
    defaults: {
      lat: null,
      lng: null,
      weight: false
    },

    toGeoCoordinate: function() {
      return {
        location: new google.maps.LatLng(parseFloat(this.get('latitude')), parseFloat(this.get('longitude'))), 
        weight: parseFloat(this.get('num_facilities'))
      };
    },

    toGeoMarker: function() {
      return new google.maps.Marker({
        position: new google.maps.LatLng(parseFloat(this.get('latitude')), parseFloat(this.get('longitude')))
      });
    }
  });

  return Coordinate;
});