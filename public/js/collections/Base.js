
define([
  'backbone',
  'models/Coordinate'
], function(Backbone, Coordinate) {
  var Base = Backbone.Collection.extend({
    initialize: function(props) {
      this.url = props.url;
      this.colors = null;

      if (props.colors) {
        this.colors = props.colors;
      }
    },

    model: function(attrs, options) {
      return new Coordinate(attrs, options);
    },
    
    url: '',

    toGeoWeightCollection: function() {
      var results = [];

      this.models.forEach(function(model) {
        results.push(model.toGeoWeight());
      });

      return results;
    },

    render: function(map) {
      // must implement
    }
  });

  return Base;
});