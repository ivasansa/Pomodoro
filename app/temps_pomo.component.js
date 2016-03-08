
(function(app) {
  app.TempsPomoComponent = ng.core
    .Component({
      selector: 'tempo',
      templateUrl: 'app/pomo_template.html'
    })
    .Class({
      constructor: function() {
        this.llistat = [];
        this.model = 'Regar el pomo';
        this.enviat = false;
      },
      valida: function() {
        this.enviat = true;
      },
     afegirTasca: function (tasca) {
        this.llistat.push(new app.Tasca(tasca, false, false, new Date(), 25));

         this.valida();

    },

    });
})(window.app || (window.app = {}));
