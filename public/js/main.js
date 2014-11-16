
require.config({
  paths: {
    'jquery':     ['http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min', 'libs/jquery/jquery'],
    'underscore': 'libs/underscore/underscore',
    'backbone':   'libs/backbone/backbone',
    'controller': 'libs/backbone.controller/backbone.controller'
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

require(['jquery', 'underscore', 'backbone', 'loader'], function(jquery, _, Backbone, Loader) {
  Backbone.history.start();
});