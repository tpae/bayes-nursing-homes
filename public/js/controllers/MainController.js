
define([
  'backbone',
  'map',
  'collections/BaseCollection'
], function(Backbone, Map, BaseCollection) {
  var MainController = Backbone.Controller.extend({

    // preliminary routes, will be used for filters
    routes: {
      '': 'index'
    },

    initialize: function() {
      var self = this;
      // initialize map and render
      this.map = new Map($('#map')[0]).render();

      // load collections, then render the instance
      this.collection = new BaseCollection();
      this.collection.fetch();
      this.collection.on('sync', function() {
        this.render(self.map.instance);
      });
    },

    index: function() {
      // index goes here
    }
  });

  return MainController;
});