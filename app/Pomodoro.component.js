//Per tal de mantenir una cohesió entre el que hi ha a memòria i a localStorage, he anat cridant setItem arreu

(function (app) {
    app.TascaFormComponent = ng.core
        .Component({
            selector: 'formulario',
            templateUrl: 'app/template.html',
        })
        .Class({
            constructor: function () {
                this.model = 'Regar el Cactus'; //Text per defecte al input
                //Fem una tasca "foo" per a utilitzar quan no hi hagi tasques seleccionades
                this.senseTasca = new app.Tasca("Escull una Tasca de la llista", false, new Date(), new app.Temps("00", "00"));
                this.tascaEnCurs = this.senseTasca;
                //Recuperem la llista de tasques de localStorage
                if (localStorage.getItem("tasques") === null) {
                    this.llistat = [];
                    this.enviat = false;
                } else {
                    this.llistat = JSON.parse(localStorage.getItem("tasques"));
                    this.enviat = true;
                }
            },

            //Funció que permet ocultar camps
            valida: function () {
                this.enviat = true;
            },

            //Funció que afegeix Tascas a la llista de Tasques
            afegirTasca: function (tasca) {
                this.llistat.push(new app.Tasca(tasca, false, new Date(), new app.Temps(24, 59), false));
                this.valida();
                localStorage.setItem("tasques", JSON.stringify(this.llistat));
            },

            //Funció que esborra la Tasca seleccionada de la llista de tasques
            esborrar: function (tasca) {
                var index = this.llistat.indexOf(tasca);
                if (index > -1) {
                    this.llistat.splice(index, 1);
                }
                this.tascaEnCurs = this.senseTasca;
                localStorage.setItem("tasques", JSON.stringify(this.llistat));
            },

            //Funció que esborra totes Tasques de la llista de tasques
            netejar: function () {
                this.tascaEnCurs = this.senseTasca;
                this.llistat = [];
                localStorage.setItem("tasques", JSON.stringify(this.llistat));
            },

            //Funció que posa en marxa el temps per a la aplicació seleccionada (per defecte qual polses)
            comensar: function (tasca) {
                this.tascaEnCurs = tasca;
                this.clearTimer();
                this.setTimer(this.tascaEnCurs);
                localStorage.setItem("tasques", JSON.stringify(this.llistat));
            },

            //Implementació del contador, amb 0 a la esquerra per a números < 10
            setTimer: function (tasca) {
                this.timer = setInterval(() => {
                    if (!tasca.paused) {
                        if (tasca.temps.sec == 0) {
                            if (tasca.temps.min == 0) {
                                this.acabar();
                            }
                            tasca.temps.sec = 59;
                            --tasca.temps.min;
                            tasca.temps.min = tasca.temps.min < 10 ? "0" + tasca.temps.min : tasca.temps.min;

                        } else {
                            --tasca.temps.sec;
                            tasca.temps.sec = tasca.temps.sec < 10 ? "0" + tasca.temps.sec : tasca.temps.sec;
                        }
                        localStorage.setItem("tasques", JSON.stringify(this.llistat));
                    }
                }, 1000);
            },

            //Per evitar conflictes amb les altres tasques, dehabilitem el contador quan canviem de tasca
            clearTimer: function () {
                clearInterval(this.timer);
            },

            //Posa en maxa el temps si está parat o el para si está en marxa
            play: function () {
                if (this.tascaEnCurs.paused == true) {
                    this.tascaEnCurs.paused = false;
                } else {
                    this.tascaEnCurs.paused = true;
                }
                localStorage.setItem("tasques", JSON.stringify(this.llistat));
            },

            //Marca una tasca com a acabada i guia a l'usuari a que esculli una altra
            acabar: function () {
                this.tascaEnCurs.acabat = true;
                this.tascaEnCurs = this.senseTasca;
                localStorage.setItem("tasques", JSON.stringify(this.llistat));
            },
        });
})(window.app || (window.app = {}));
