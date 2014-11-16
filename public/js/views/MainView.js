
define(['backbone'], function(Backbone) {
  var MainView = Backbone.View.extend({
    events: {
      'click .tabs-toggle': 'toggleFooter',
      'click .mapToggle': 'toggleMap'
    },

    initialize: function() {
      
    },

    toggleMap: function(e) {
      var target = $(e.currentTarget);
      e.preventDefault();

      if (target.hasClass('selected')) {
        target.removeClass('selected');
      } else {
        target.addClass('selected');
      }
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