
define(['underscore'], function(_) {
  function Map(element, option) {
    this.defaults = {
      center: { lat: 38.3700, lng: -118.6462 },
      zoom: 7,
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
        "featureType": "all",
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
      },{
        "featureType": "administrative.province",
        "elementType": "labels",
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

  Map.prototype.search = function(zip, cb) {
    var geocoder = new google.maps.Geocoder();
    var self = this;
    geocoder.geocode( { 'address': zip }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        self.setCenter(results[0].geometry.location, -330);
        self.setZoom(9);
        cb(null, self.instance);
      } else {
        cb(status);
      }
    });
  };

  Map.prototype.setCenter = function(latLng, offsetx, offsety) {
    var self = this;

    var point1 = self.instance.getProjection().fromLatLngToPoint(
        (latLng instanceof google.maps.LatLng) ? latLng : self.instance.getCenter()
    );
    
    var point2 = new google.maps.Point(
        ( (typeof(offsetx) == 'number' ? offsetx : 0) / Math.pow(2, self.instance.getZoom()) ) || 0,
        ( (typeof(offsety) == 'number' ? offsety : 0) / Math.pow(2, self.instance.getZoom()) ) || 0
    );  

    self.instance.setCenter(self.instance.getProjection().fromPointToLatLng(new google.maps.Point(
        point1.x - point2.x,
        point1.y + point2.y
    )));
  };

  return Map;
});