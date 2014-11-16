
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
      console.log(this.colors);
      return new google.maps.visualization.HeatmapLayer({
        data: new google.maps.MVCArray(this.toGeoWeightCollection()),
        radius: (this.radius) ? parseInt(this.radius, 10) : 20,
        gradient: (this.colors) ? this.colors : undefined
      });
    }
  });

  return Heatmap;
});