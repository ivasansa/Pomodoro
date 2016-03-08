(function(app) {
  app.Tasca = Tasca;

  function Tasca(nom, acabat, fechaCreacion, temps) {
    this.nom = nom;
    this.acabat = acabat;
    this.fechaCreacion = fechaCreacion;
    this.temps = temps;
  }


})(window.app || (window.app = {}));
