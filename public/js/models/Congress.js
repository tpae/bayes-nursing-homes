
define(['backbone'], function(Backbone) {
  var Congress = Backbone.Model.extend({
    endpoint: 'https://congress.api.sunlightfoundation.com',
    apiKey: '557a8d8140f3430aa173e2dabbb0809e',
    url: function() {
      return this.endpoint + '/legislators/locate?apikey=' + this.apiKey + '&zip=' + this.get('zip')
    }
  });

  return Congress;
});