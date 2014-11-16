
define([
  'backbone',
  'map',
  'collections/BaseCollection'
  ], function(Backbone, Map, BaseCollection) {
  var MainController = Backbone.Controller.extend({

    routes: {
      '': 'index'
    },

    initialize: function() {
      var self = this;
      this.collection = new BaseCollection();
      this.collection.fetch();
      this.collection.on('sync', function() {
        self.buildHeatmap();
      });
    },

    buildHeatmap: function() {
      var heatmap = new google.maps.visualization.HeatmapLayer({
        data: new google.maps.MVCArray(this.collection.toGeoData())
      });

      this.map.render(heatmap);
    },

    index: function() {
      this.map = new Map($('#map')[0], {
        center: { lat: 37.7833, lng: -122.4167 },
        zoom: 8,
        panControl: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false
      });

      this.map.addStyle({
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
        ]
      });

      this.map.render();
    }
  });

  return MainController;
});