function mostrarSpinner(tempo) {
    $('#spinner-overlay').removeClass('d-none'); // Mostra o spinner
    setTimeout(function() {
        $('#spinner-overlay').addClass('d-none'); // Oculta o spinner após 3 segundos
    }, tempo);
}