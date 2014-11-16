
require.config({
  paths: {
    'jquery':     ['http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min', 'libs/jquery/jquery'],
    'underscore': 'libs/underscore/underscore',
    'backbone':   'libs/backbone/backbone',
    'controller': 'libs/backbone.controller/backbone.controller',
    'map':        'modules/Map'
  },
  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    controller: {
      deps: ['underscore', 'backbone']
    },
    loader: ['controller'],
    app: ['controller']
  },
  waitSeconds: 10
});

require(['jquery', 'underscore', 'backbone', 'loader', 'map'], function($, _, Backbone, Loader, Map) {
  
  var map = new Map($('#map')[0], {
    center: { lat: 37.7833, lng: -122.4167 },
    zoom: 8,
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false
  });

  map.addStyle({
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  });

  map.render();

  Backbone.history.start();
});