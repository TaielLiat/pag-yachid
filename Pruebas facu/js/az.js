function ordenarLista(tipoOrdenamiento, idListaAOrdenar) {
    var listaJuegos;
    listaJuegos = document.getElementById(idListaAOrdenar).getElementsByTagName("LI");
    ordenarQuickSort(listaJuegos, 0, listaJuegos.length - 1, tipoOrdenamiento);
}

function ordenarQuickSort(lista, inicio, fin, tipoOrdenamiento) {
    if (inicio < fin) {
        var i = particionar(lista, inicio, fin, tipoOrdenamiento);
        ordenarQuickSort(lista, inicio, i - 1, tipoOrdenamiento);
        ordenarQuickSort(lista, i + 1, fin, tipoOrdenamiento);
    }
}

function particionar(vector, inicio, fin, tipoOrdenamiento) {
    var pivote = vector[fin];
    i = (inicio - 1);
    for (var j = inicio; j < fin; j++) {
        if (comparacionSegunTipoOrdenamiento(tipoOrdenamiento, vector[j].innerHTML, pivote.innerHTML)) {
            i++;
            vector[i].parentNode.insertBefore(vector[j], vector[i]);
        }
    }
    vector[i + 1].parentNode.insertBefore(vector[fin], vector[i + 1]);
    return i + 1;
}

function comparacionSegunTipoOrdenamiento(tipoOrdenamiento, primerElemento, siguienteElemento) {
    if (tipoOrdenamiento === "A-Z") {
        return primerElemento.toLowerCase() < siguienteElemento.toLowerCase();
    } else if (tipoOrdenamiento === "Z-A") {
        return primerElemento.toLowerCase() > siguienteElemento.toLowerCase();
    } else if (tipoOrdenamiento === "menorAMayorPrecio") {
        return primerElemento < siguienteElemento;
    } else if (tipoOrdenamiento === "mayorAMenorPrecio") {
        return primerElemento > siguienteElemento;
    }

    return false;
}