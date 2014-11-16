
define([
  'underscore',
  'backbone',
  'models/Coordinate'
], function(_, Backbone, Coordinate) {
  var Base = Backbone.Collection.extend({
    initialize: function(props) {
      this.url = props.url;
      this.colors = null;

      if (props.colors) {
        if (!_.isArray(props.colors)) {
          this.colors = JSON.parse(props.colors);
        } else {
          this.colors = props.colors;
        }
      }

      if (props.radius) {
        this.radius = props.radius;
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