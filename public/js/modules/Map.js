
define(['underscore'], function(_) {
  function Map(element, option) {
    this.defaults = {
      center: { lat: 37.7833, lng: -122.4167 },
      zoom: 8,
      panControl: true,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      overviewMapControl: false
    };
    
    this.styles   = [];
    this.option   = _.extend(this.defaults, option);
    this.element  = element;
    this.map      = null;
  }

  Map.prototype.addStyle = function(style) {
    this.styles.push(style);

    return this;
  };

  Map.prototype.getStyle = function() {
    return new google.maps.StyledMapType(this.styles, { name: 'Styled Map' });
  };

  Map.prototype.render = function(heatmap) {
    if (!this.map) {
      this.map = new google.maps.Map(this.element, this.option);
      this.map.mapTypes.set('map_style', this.getStyle());
      this.map.setMapTypeId('map_style');
    } else {
      if (heatmap) {
        heatmap.setMap(this.map);
      }
    }
  };

  return Map;
});