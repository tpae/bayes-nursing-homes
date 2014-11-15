
define(["backbone"], function(Backbone) {
  var App = Backbone.View.extend({
    initialize: function(){
      console.log("it's working!");
    }
  });
  
  return App;
});