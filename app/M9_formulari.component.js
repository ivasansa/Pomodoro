(function(app) {
  app.TasquesForm = ng.core
    .Component({
      selector: 'aplicacio',
      template: '<formulario></formulario>',
      directives: [app.TascaFormComponent]

    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));




