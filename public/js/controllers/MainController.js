
define([
  'backbone',
  'map',
  'modules/Factory',
  'views/MainView'
], function(Backbone, Map, Factory, MainView) {
  var MainController = Backbone.Controller.extend({
    // preliminary routes, will be used for filters
    routes: {
      '*actions': 'index'
    },

    initialize: function() {
      var self = this;

      // initialize map then render
      this.map = new Map($('#map')[0]).render();

      // initialize factory
      this.factory = new Factory(this.map);

      // initialize view
      this.view = new MainView({
        el: $('#main')
      });
    },

    index: function(action) {
      if (action) {
        this.factory.setQuery(action).build();
      }
    }
  });

  return MainController;
});