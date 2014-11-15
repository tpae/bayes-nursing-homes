//the require library is configuring paths
require.config({
  paths: {
    "jquery": ["http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min", "libs/jquery/jquery"],
    "underscore": "libs/underscore/underscore-min",
    "backbone": "libs/backbone/backbone-min"
  },
  shim: {
    "backbone": {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    }
  },
  waitSeconds: 10
});

//requiring the scripts in the first argument and then passing the library namespaces into a callback
//you should be able to console log all of the callback arguments
// require(['jquery', 'underscore', 'backbone', 'app'], function(jquery, _, Backbone, App){
//     new App;
// });