
define(['backbone', 'bootstrap'], function(Backbone, bootstrap) {
  var MainView = Backbone.View.extend({
    events: {
      'click .tabs-toggle': 'toggleFooter'
    },

    initialize: function() {

    },

    toggleFooter: function(e) {
      var target = $(e.currentTarget);
      if (!target.hasClass('oldpeople')) {
        $('#footer').slideUp(75);
      } else {
        $('#footer').slideDown(75);
      }
    }
  });

  return MainView;
});