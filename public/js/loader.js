
define([
  'controllers/MainController'
], function(MainController) {
  var main = new MainController({router: true});

  return main;
});