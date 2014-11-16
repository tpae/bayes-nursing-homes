
define([
  'backbone',
  'map',
  'modules/Factory'
], function(Backbone, Map, Factory) {
  var MainController = Backbone.Controller.extend({
    // preliminary routes, will be used for filters
    routes: {
      '*actions': 'index'
    },

    initialize: function() {
      var self = this;

      // initialize map and render
      this.map = new Map($('#map')[0]).render();

      // initiate factory
      this.factory = new Factory(this.map);
    },

    index: function(action) {
      if (action) {
        this.factory.setQuery(action).build();
      }
    }
  });

  return MainController;
});