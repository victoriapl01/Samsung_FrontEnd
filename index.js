const form = document.getElementById('formulario');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    //Variables del formulario
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const clave = document.getElementById('clave');
    const conf_clave = document.getElementById('conf_clave');

    //Variable local que identifica si los valores son válidos
    let campos_validos = true;

    // Validación del campo nombre
    if (nombre.value === '') {
        campos_validos = false;
        //Eliminación del campo válido por si anteriormente se ha escrito de forma válida
        nombre.classList.remove('campo-valido');
        nombre.classList.remove('successIcon');
        nombre.classList.add('campo-invalido');
        nombre.classList.add('errorIcon');
        nombre.nextElementSibling.textContent = 'Rellene este campo';
    } else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s.,;:"'()¿?!_¡-]+$/g.test(nombre.value)) {
        campos_validos = false;
        nombre.classList.remove('campo-valido');
        nombre.classList.remove('successIcon');
        nombre.classList.add('campo-invalido');
        nombre.classList.add('errorIcon');
        nombre.nextElementSibling.textContent = 'No se permiten caractéres numéricos';
    } else {
        nombre.classList.remove('campo-invalido');
        nombre.classList.remove('errorIcon');
        nombre.classList.add('campo-valido');
        nombre.classList.add('successIcon');
        nombre.nextElementSibling.textContent = '';
    }

    // Validación del campo email
    if (email.value === '') {
        campos_validos = false;
        email.classList.remove('campo-valido');
        email.classList.remove('successIcon');
        email.classList.add('campo-invalido');
        email.classList.add('errorIcon');
        email.nextElementSibling.textContent = 'Rellene este campo';
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        campos_validos = false;
        email.classList.remove('campo-valido');
        email.classList.remove('successIcon');
        email.classList.add('campo-invalido');
        email.classList.add('errorIcon');
        email.nextElementSibling.textContent = 'Email inválido';
    } else {
        email.classList.remove('campo-invalido');
        email.classList.remove('errorIcon');
        email.classList.add('campo-valido');
        email.classList.add('successIcon');
        email.nextElementSibling.textContent = '';
    }

    // Validación del campo clave
    if (clave.value === '') {
        campos_validos = false;
        clave.classList.remove('campo-valido');
        clave.classList.remove('successIcon');
        clave.classList.add('campo-invalido');
        clave.classList.add('errorIcon');
        clave.nextElementSibling.textContent = 'Rellene este campo';
    } else if (!/^[ \s\S]{1,8}$/.test(clave.value)) {
        campos_validos = false;
        clave.classList.remove('campo-valido');
        clave.classList.remove('successIcon');
        clave.classList.add('campo-invalido');
        clave.classList.add('errorIcon');
        clave.nextElementSibling.textContent = 'No debe tener más de 8 caracteres';
    } else {
        clave.classList.remove('campo-invalido');
        clave.classList.remove('errorIcon');
        clave.classList.add('campo-valido');
        clave.classList.add('successIcon');
        clave.nextElementSibling.textContent = '';
    }

    // Validación del campo conf_clave
    if (conf_clave.value === '') {
        campos_validos = false;
        conf_clave.classList.remove('campo-valido');
        conf_clave.classList.remove('successIcon');
        conf_clave.classList.add('campo-invalido');
        conf_clave.classList.add('errorIcon');
        conf_clave.nextElementSibling.textContent = 'Rellene este campo';
    } else if (conf_clave.value === clave.value) {
        conf_clave.classList.remove('campo-invalido');
        conf_clave.classList.remove('errorIcon');
        conf_clave.classList.add('campo-valido');
        conf_clave.classList.add('successIcon');
        conf_clave.nextElementSibling.textContent = '';
    } else {
        campos_validos = false;
        conf_clave.classList.remove('campo-valido');
        conf_clave.classList.remove('successIcon');
        conf_clave.classList.add('campo-invalido');
        conf_clave.classList.add('errorIcon');
        conf_clave.nextElementSibling.textContent = 'La contraseñas no coinciden';
    }

    //Alert indicando que la inscripción ha sido correcta
    if (campos_validos) {
        alert('Inscripción completada correctamente');
    }

});