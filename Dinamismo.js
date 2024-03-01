function toggleVisibility() {
    var miTexto = document.getElementById('miTexto');
    
    // Cambiar de 'hidden' a 'visible' o viceversa
    if (miTexto.style.visibility === 'hidden' || miTexto.style.visibility === '') {
        miTexto.style.visibility = 'visible';
    } else {
        miTexto.style.visibility = 'hidden';
    }
}
alert("hola mundo")