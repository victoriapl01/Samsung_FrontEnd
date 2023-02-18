const form = document.getElementById('formulario');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const clave = document.getElementById('clave');
    const conf_clave = document.getElementById('conf_clave');

    // Validación del campo nombre
    if (nombre.value === '') {
        nombre.classList.add('campo-invalido');
        nombre.nextElementSibling.textContent = 'Rellene este campo';
    } else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s.,;:"'()¿?!_¡-]+$/g.test(nombre.value)) {
        nombre.classList.add('campo-invalido');
        nombre.nextElementSibling.textContent = 'No se permiten caractéres numéricos';
    } else {
        nombre.classList.remove('campo-invalido');
        nombre.classList.add('campo-valido');
        nombre.nextElementSibling.textContent = '';
    }

    // Validación del campo email
    if (email.value === '') {
        email.classList.add('campo-invalido');
        email.nextElementSibling.textContent = 'Rellene este campo';
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        email.classList.add('campo-invalido');
        email.nextElementSibling.textContent = 'Email inválido';
    } else {
        email.classList.remove('campo-invalido');
        email.classList.add('campo-valido');
        email.nextElementSibling.textContent = '';
    }

    // Validación del campo clave
    if (clave.value === '') {
        clave.classList.add('campo-invalido');
        clave.nextElementSibling.textContent = 'Rellene este campo';
    } else if (!/^[ \s\S]{1,8}$/.test(clave.value)) {
        clave.classList.add('campo-invalido');
        clave.nextElementSibling.textContent = 'No debe tener más de 8 caracteres';
    } else {
        clave.classList.remove('campo-invalido');
        clave.classList.add('campo-valido');
        clave.nextElementSibling.textContent = '';
    }

    // Validación del campo conf_clave
    if (conf_clave.value === '') {
        conf_clave.classList.add('campo-invalido');
        conf_clave.nextElementSibling.textContent = 'Rellene este campo';
    } else if (conf_clave.value === clave.value) {
        conf_clave.classList.remove('campo-invalido');
        conf_clave.classList.add('campo-valido');
        conf_clave.nextElementSibling.textContent = '';
    } else {
        conf_clave.classList.add('campo-invalido');
        conf_clave.nextElementSibling.textContent = 'La contraseñas no coinciden';
    }
});