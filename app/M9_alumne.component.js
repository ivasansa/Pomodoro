
(function(app) {
  app.TascaFormComponent = ng.core
    .Component({
      selector: 'formulario',
      templateUrl: 'app/M9_template.html',

    })
    .Class({
      constructor: function() {
        this.llistat = [];
        this.model = 'Regar el Cactus';
        this.enviat = false;
        this.tascaEnCurs = new app.Tasca("Cap Tasca Seleccionada", false, new Date(), new app.Temps(0,0));
      },
      valida: function() {
        this.enviat = true;
      },
     afegirTasca: function (tasca) {
        this.llistat.push(new app.Tasca(tasca, false, new Date(), new app.Temps(25,0)));

         this.valida();

    },

      comensar: function(tasca) {

            this.tascaEnCurs = tasca;
            this.setTimer(this.tascaEnCurs);
        },

      setTimer: function(tasca) {
            this.timer = setInterval(() => {
                if(tasca.temps.sec == 0){
                    if(tasca.temps.min == 0){
                        console.log('pofff');
                    }
                    tasca.temps.sec = 59;
                    --tasca.temps.min;
                } else {
                    --tasca.temps.sec;
                }
            }, 1000);
        },

        clearTimer: function() {
            clearInterval(tasca.temps.timer);
        },

        stop: function(){
            tasca.min = 25;
            tasca.sec = 0;
        },


    });
})(window.app || (window.app = {}));

