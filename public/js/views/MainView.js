
define([
  'underscore', 
  'backbone',
  'models/Congress'
], function(_, Backbone, Congress) {
  var MainView = Backbone.View.extend({
    events: {
      'click .tabs-toggle': 'toggleFooter',
      'keydown #search-form': 'onlyNumbers',
      'submit #search-form': 'search'
    },

    initialize: function(props) {
      var self = this;
      this.query = props.query;
      this.map = props.map;

      $('.mapToggle.selected').each(function(i, element) {
        var element = $(element);
        self.query.push(element.data('key'));
      });

      $('.mapToggle').on('click', this.toggleMap.bind(this));

      this.pullCongress();
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

    pullCongress: function() {
      var congress = new Congress({
        zip: $('#search-input').val()
      });

      congress.fetch();
      
      congress.once('sync', function() {
        var results = this.get('results');
        var member = _.first(results);
        $('#congress .name').html(member.title + ' ' + member.first_name + ' ' + member.last_name);
        $('#congress .phone').html(member.phone);
        if (member.twitter_id) {
          $('#congress .tweet').attr('href', 'https://twitter.com/intent/tweet?screen_name=' + member.twitter_id);
        } else {
          $('#congress .tweet').hide();
        }
      });
    },

    search: function(e) {
      e.preventDefault();
      this.pullCongress();
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
        this.query.remove($('.dateFilter.selected').data('key'));
        $('#footer').slideUp(75);
      } else {
        this.query.push($('.dateFilter.selected').data('key'));
        $('#footer').slideDown(75);
      }
    }
  });

  return MainView;
});