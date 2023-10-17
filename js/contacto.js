function validateForm() {
    // Resetear mensajes de error
    document.getElementById('nameError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';

    // Obtener valores de los campos
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validar que los campos no estén vacíos
    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Debe ingresar su nombre y apellido.';
        return false;
    }

    if (phone.trim() === '') {
        document.getElementById('phoneError').innerText = 'Debe ingresar su número de teléfono.';
        return false;
    }

    if (email.trim() === '') {
        document.getElementById('emailError').innerText = 'Debe ingresar su correo electrónico.';
        return false;
    }

    if (message.trim() === '') {
        document.getElementById('messageError').innerText = 'Debe ingresar un mensaje.';
        return false;
    }

    // La validación fue exitosa
    return true;
}
