
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

    this.styles = [
      {
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#CCCCCC" }
        ]
      },{
        "featureType": "water",
        "stylers": [
          { "color": "#ffffff" }
        ]
      },{
        "featureType": "road",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "poi",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
          { "visibility": "on" }
        ]
      }
    ];

    this.option   = _.extend(this.defaults, option);
    this.element  = element;
    this.instance = null;

    return this;
  }

  Map.prototype.addStyle = function(style) {
    this.styles.push(style);

    return this;
  };

  Map.prototype.getStyle = function() {
    return new google.maps.StyledMapType(this.styles, { name: 'Styled Map' });
  };

  Map.prototype.render = function() {
    if (!this.instance) {
      this.instance = new google.maps.Map(this.element, this.option);
      this.instance.mapTypes.set('map_style', this.getStyle());
      this.instance.setMapTypeId('map_style');
    }

    return this;
  };

  return Map;
});