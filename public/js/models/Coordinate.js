
define(['backbone'], function(Backbone) {
  var Coordinate = Backbone.Model.extend({
    defaults: {
      lat: null,
      lng: null,
      weight: false
    },
    toGeoData: function() {
      return {
        location: new google.maps.LatLng(parseFloat(this.get('latitude')), parseFloat(this.get('longitude'))), 
        weight: parseInt(this.get('num_facilities'))
      };
    }
  });

  return Coordinate;
});