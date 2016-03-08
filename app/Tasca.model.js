//Model que representa una tasca
(function(app) {
  app.Tasca = Tasca;

  function Tasca(nom, acabat, fechaCreacion, temps, paused) {
    this.nom = nom;
    this.acabat = acabat;
    this.fechaCreacion = fechaCreacion;
    this.temps = temps;
    this.paused = paused;
  }


})(window.app || (window.app = {}));
