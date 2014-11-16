
define(function() {
  function Map(element, option) {
    this.styles   = [];
    this.option   = option;
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