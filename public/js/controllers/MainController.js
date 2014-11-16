
define([
  'backbone',
  'map',
  'modules/Factory',
  'modules/Query',
  'views/MainView'
], function(Backbone, Map, Factory, Query, MainView) {
  var MainController = Backbone.Controller.extend({
    // preliminary routes, will be used for filters
    routes: {
      '*actions': 'index'
    },

    initialize: function() {
      var self = this;

      // initialize map then render
      this.map = new Map($('#map')[0]).render();

      // initialize query
      this.query = new Query();

      // initialize factory
      this.factory = new Factory(this.map, this.query);

      // initialize view
      this.view = new MainView({
        el: $('#main'),
        query: this.query,
        map: this.map
      });
    },

    index: function(action) {
      var query = action;

      this.factory.build(query);
    }
  });

  return MainController;
});