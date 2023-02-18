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
        nombre.nextElementSibling.innerText = 'Rellene este campo';
    } else if (!/^[a-zA-Z]+$/.test(nombre.value)) {
        nombre.classList.add('campo-invalido');
        nombre.nextElementSibling.innerText = 'No se permiten numeros';
    } else {
        nombre.classList.remove('campo-invalido');
        nombre.classList.add('campo-valido');
        nombre.nextElementSibling.innerText = '';
    }

    // Validación del campo email
    if (email.value === '' || !/^\S+@\S+\.\S+$/.test(email.value)) {
        email.classList.add('campo-invalido');
        email.nextElementSibling.innerText = 'Rellene este campo';
    } else {
        email.classList.remove('campo-invalido')
        email.classList.add('campo-valido');
        email.nextElementSibling.innerText = '';
    }

    // Validación del campo clave
    if (clave.value === '') {
        clave.classList.add('campo-invalido');
        clave.nextElementSibling.innerText = 'Rellene este campo';
    } else {
        email.classList.remove('campo-invalido')
        email.classList.add('campo-valido');
        clave.nextElementSibling.innerText = '';
    }

    // Validación del campo conf_clave
    if (conf_clave.value === '' || conf_clave.value !== clave.value) {
        conf_clave.classList.add('campo-invalido');
        conf_clave.nextElementSibling.innerText = 'Rellene este campo';
    } else {
        email.classList.remove('campo-invalido')
        email.classList.add('campo-valido');
        conf_clave.nextElementSibling.innerText = '';
    }
});