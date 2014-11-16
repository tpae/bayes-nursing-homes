
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
        self.map.render(this.getHeatmap());
      });
    },

    renderMap: function() {
      this.map = new Map($('#map')[0]);

      this.map.addStyle({
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
        ]
      });

      this.map.render();
    },

    index: function() {
      this.renderMap();
    }
  });

  return MainController;
});