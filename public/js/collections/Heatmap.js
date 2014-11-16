
define([
  'collections/Base',
  'models/Coordinate'
], function(Base, Coordinate) {
  var Heatmap = Base.extend({
    url: '',

    render: function(map) {
      if (!this.heatmap) {
        this.heatmap = this.getHeatmap();
      }

      this.heatmap.setMap(map);
    },

    getHeatmap: function() {
      return new google.maps.visualization.HeatmapLayer({
        data: new google.maps.MVCArray(this.toGeoWeightCollection())
      });
    }
  });

  return Heatmap;
});