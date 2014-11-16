
define(['backbone'], function(Backbone) {
  var MainView = Backbone.View.extend({
    events: {
      'click .tabs-toggle': 'toggleFooter',
      'click .mapToggle': 'toggleMap'
    },

    initialize: function(props) {
      var self = this;
      this.query = props.query;

      this.$('.mapToggle.selected').each(function(i, element) {
        var element = $(element);
        self.query.push(element.data('key'));
      });
    },

    toggleMap: function(e) {
      var target = $(e.currentTarget);
      e.preventDefault();

      if (target.hasClass('selected')) {
        this.query.remove(target.data('key'));
        target.removeClass('selected');
      } else {
        this.query.push(target.data('key'));
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