
define(['backbone'], function(Backbone) {
  var Coordinate = Backbone.Model.extend({
    defaults: {
      latitude: null,
      longtitude: null,
      norm_score: false,
      label: null,
      image: null
    },

    toLocation: function() {
      return new google.maps.LatLng(parseFloat(this.get('latitude')), parseFloat(this.get('longtitude')));
    },

    toGeoWeight: function() {
      return {
        location: this.toLocation(), 
        weight: parseFloat(this.get('norm_score'))
      };
    },

    toGeoMarker: function() {
      return new google.maps.Marker({
        position: this.toLocation(),
        icon: '/images/' + this.get('image') + '.png'
      });
    }
  });

  return Coordinate;
});