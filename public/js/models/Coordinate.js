
define(['backbone'], function(Backbone) {
  var Coordinate = Backbone.Model.extend({
    defaults: {
      lat: null,
      lng: null,
      weight: false
    },

    toLocation: function() {
      return new google.maps.LatLng(parseFloat(this.get('latitude')), parseFloat(this.get('longitude')));
    },

    toGeoWeight: function() {
      return {
        location: this.toLocation(), 
        weight: parseFloat(this.get('num_facilities'))
      };
    },

    toGeoMarker: function() {
      return new google.maps.Marker({
        position: this.toLocation()
      });
    }
  });

  return Coordinate;
});