
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
        this.senseTasca = new app.Tasca("Escull una Tasca de la llista", false, new Date(), new app.Temps("00","00"));
        this.tascaEnCurs = this.senseTasca;
      },
      valida: function() {
        this.enviat = true;
      },
     afegirTasca: function (tasca) {
        this.llistat.push(new app.Tasca(tasca, false, new Date(), new app.Temps(25,0), false));

         this.valida();

    },

      esborrar: function (tasca) {
        var index = this.llistat.indexOf(tasca);
        if (index > -1) {
            this.llistat.splice(index, 1);
        }
      this.tascaEnCurs = this.senseTasca;

    },

      comensar: function(tasca) {

            this.tascaEnCurs = tasca;
            this.clearTimer();
            this.setTimer(this.tascaEnCurs);
        },

      setTimer: function(tasca) {
            this.timer = setInterval(() => {
                if(!tasca.paused){
                if(tasca.temps.sec == 0){
                    if(tasca.temps.min == 0){
                        this.acabar();
                    }
                    tasca.temps.sec = 59;
                    --tasca.temps.min;
                    tasca.temps.min = tasca.temps.min < 10 ? "0" + tasca.temps.min : tasca.temps.min;

                } else {
                    --tasca.temps.sec;
                    tasca.temps.sec = tasca.temps.sec < 10 ? "0" + tasca.temps.sec : tasca.temps.sec;
                }
            }}, 1000);
        },

        clearTimer: function() {
            clearInterval(this.timer);
        },

        pause: function(){
            this.tascaEnCurs.paused = true;
        },
        play: function(){
            this.tascaEnCurs.paused = false;
        },
        acabar: function(){
            this.tascaEnCurs.acabat = true;
            this.tascaEnCurs = this.senseTasca;
        },



    });
})(window.app || (window.app = {}));

