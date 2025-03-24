if (window.innerWidth) {
    window.addEventListener('load', function() { 
        document.body.classList.add('loaded');
    });
}


function redirigirAlFormulario() {
    const confirmacion = confirm("¿Quieres realizar el formulario para obtener una hamburguesa gratis?");
    if (confirmacion) {
        window.location.href = "formulario.html"; 
    }
}

const botonFormulario = document.createElement('button');
botonFormulario.id = 'boton-formulario';
botonFormulario.textContent = 'Formulario';
botonFormulario.onclick = redirigirAlFormulario;

document.querySelector('.menu').appendChild(botonFormulario);

function toggleModoBlanco() {
    const body = document.body;
    body.classList.toggle('modo-blanco');

    if (body.classList.contains('modo-blanco')) {
        localStorage.setItem('modo', 'blanco');
    } else {
        localStorage.setItem('modo', 'predeterminado');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const modoGuardado = localStorage.getItem('modo');
    if (modoGuardado === 'blanco') {
        document.body.classList.add('modo-blanco');
    }
});

const botonModoBlanco = document.createElement('button');
botonModoBlanco.id = 'boton-modo-blanco';
botonModoBlanco.textContent = 'Blanco';
botonModoBlanco.onclick = toggleModoBlanco;

document.querySelector('.menu').appendChild(botonModoBlanco);
