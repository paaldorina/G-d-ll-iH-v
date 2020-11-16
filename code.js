function menetido() {
    var indulas = parseInt(document.getElementById("inputIndulas").value);
    var erkezes = parseInt(document.getElementById("inputErkezes").value);
    if (indulas == erkezes) {
        alert("Hiba: Azonos megállókat választott ki!");
        return;
    }
    var eredmeny = indulas - erkezes;
    var ido = Math.abs(eredmeny);
    if (indulas != erkezes) {
        alert("Menetidő: " + ido + " perc!");
        return;
    }
}