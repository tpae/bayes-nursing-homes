//the require library is configuring paths
require.config({
  paths: {
    "jquery": ["http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min", "libs/jquery/jquery"],
    "underscore": "libs/underscore/underscore",
    "backbone": "libs/backbone/backbone"
  },
  shim: {
    "backbone": {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    }
  },
  waitSeconds: 10
});

require(['jquery', 'underscore', 'backbone', 'app'], function(jquery, _, Backbone, App) {
  new App;
});