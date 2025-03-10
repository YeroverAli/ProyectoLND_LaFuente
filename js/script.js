if (window.innerWidth) {
    window.addEventListener('load', function() { 
        document.body.classList.add('loaded');
    });
}

// script.js

// Función para mostrar un mensaje de alerta y redirigir al formulario
function redirigirAlFormulario() {
    const confirmacion = confirm("¿Quieres realizar el formulario para obtener una hamburguesa gratis?");
    if (confirmacion) {
        // Redirigir al formulario
        window.location.href = "formulario.html"; // Cambia "formulario.html" por la ruta correcta
    }
}

// Añadir el botón dinámicamente
const botonFormulario = document.createElement('button');
botonFormulario.id = 'boton-formulario';
botonFormulario.textContent = '¡Haz este formulario!';
botonFormulario.onclick = redirigirAlFormulario;

// Insertar el botón en la página (por ejemplo, en el menú)
document.querySelector('.menu').appendChild(botonFormulario);

// script.js

// Función para cambiar entre modo blanco y modo predeterminado
function toggleModoBlanco() {
    const body = document.body;
    body.classList.toggle('modo-blanco');

    // Guardar la preferencia del usuario en localStorage
    if (body.classList.contains('modo-blanco')) {
        localStorage.setItem('modo', 'blanco');
    } else {
        localStorage.setItem('modo', 'predeterminado');
    }
}

// Verificar la preferencia del usuario al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const modoGuardado = localStorage.getItem('modo');
    if (modoGuardado === 'blanco') {
        document.body.classList.add('modo-blanco');
    }
});

// Añadir el botón de modo blanco dinámicamente
const botonModoBlanco = document.createElement('button');
botonModoBlanco.id = 'boton-modo-blanco';
botonModoBlanco.textContent = 'Modo Blanco';
botonModoBlanco.onclick = toggleModoBlanco;

// Insertar el botón en la página (en el menú)
document.querySelector('.menu').appendChild(botonModoBlanco);