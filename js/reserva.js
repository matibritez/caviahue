document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.form');

    form.addEventListener('submit', function (event) {
        // Validar Apellido
        var apellidoInput = form.querySelector('[placeholder="Ingrese su Apellido"]');
        if (apellidoInput && apellidoInput.value.trim() === '') {
            alert('Por favor, ingrese su Apellido.');
            event.preventDefault();
            return false;
        }

        // Validar Nombre
        var nombreInput = form.querySelector('[placeholder="Ingrese su Nombre"]');
        if (nombreInput && nombreInput.value.trim() === '') {
            alert('Por favor, ingrese su Nombre.');
            event.preventDefault();
            return false;
        }

        // Validar Teléfono de contacto
        var telefonoInput = form.querySelector('[placeholder="Ingrese su Teléfono"]');
        if (telefonoInput && telefonoInput.value.trim() === '') {
            alert('Por favor, ingrese su Teléfono.');
            event.preventDefault();
            return false;
        }

        // Validar Email
        var emailInput = form.querySelector('[placeholder="Ingrese su Mail"]');
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput && !emailRegex.test(emailInput.value.trim())) {
            alert('Por favor, ingrese un Email válido.');
            event.preventDefault();
            return false;
        }

        
        // Si pasa todas las validaciones, el formulario se envía
        alert('Formulario enviado exitosamente!');
        return true;
    });
});
