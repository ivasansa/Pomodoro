function Pipe() {
    this.transform = function (value, args) {
        var paraules = value.split(" ");
        paraules = paraules.slice(0, args[0]);
        var novaCadena = paraules.join(" ") + "...";
        return novaCadena;
    }
}

Pipe.annotations = [
    new ng.core.Pipe({
        name: "datefy"
    })
];
