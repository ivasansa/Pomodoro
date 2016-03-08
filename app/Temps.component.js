(function(app) {
  app.TempsPomo = ng.core
    .Component({
      selector: 'temps',
      template: '<tempo></tempo>',
      directives: [app.TempsPomoComponent]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));



