
define(['underscore', 'backbone'], function(_, Backbone) {
  var MainView = Backbone.View.extend({
    events: {
      'click .tabs-toggle': 'toggleFooter',
      'click .mapToggle': 'toggleMap',
      'keydown #search-form': 'onlyNumbers',
      'submit #search-form': 'search'
    },

    initialize: function(props) {
      var self = this;
      this.query = props.query;
      this.map = props.map;

      this.$('.mapToggle.selected').each(function(i, element) {
        var element = $(element);
        self.query.push(element.data('key'));
      });
    },

    onlyNumbers: function(e) {
      if ( e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 13 ) {
        // do nothing
      } else {
        if (e.keyCode < 48 || e.keyCode > 57 ) {
          e.preventDefault(); 
        } 
      }
    },

    search: function(e) {
      e.preventDefault();
      this.map.search($('#search-input').val(), _.noop);
    },

    toggleMap: function(e) {
      var target = $(e.currentTarget);

      if (target.is('input')) {
        if (target.is(':checked')) {
          this.query.push(target.data('key'));
        } else {
          this.query.remove(target.data('key'));
        }
      } else {
        e.preventDefault();
        
        if (target.hasClass('selected')) {
          this.query.remove(target.data('key'));
          target.removeClass('selected');
        } else {
          this.query.push(target.data('key'));
          target.addClass('selected');
        }
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