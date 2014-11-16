
define(['backbone'], function(Backbone) {
  var MainController = Backbone.Controller.extend({
    routes: {
      '': 'list'
    },

    initialize: function() {
      // do some init stuff
    },

    list: function() {
      console.log('here');
    }
  });

  return MainController;
});