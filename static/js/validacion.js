document.addEventListener('DOMContentLoaded', function() {
    const codigoPostalInput = document.getElementById('codigo_postal');
    const codigoPostalError = document.getElementById('codigo_postalError');

    codigoPostalInput.addEventListener('input', function() {
        if (!codigoPostalInput.checkValidity()) {
            codigoPostalError.style.display = 'inline';
        } else {
            codigoPostalError.style.display = 'none';
        }
    });
});
