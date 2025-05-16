const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const botonRechazarCookies = document.getElementById('btn-rechazar-cookies'); // ← nuevo
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if (!localStorage.getItem('cookies-aceptadas')) {
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
} else {
    dataLayer.push({ 'event': 'cookies-aceptadas' });
}

botonAceptarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    localStorage.setItem('cookies-aceptadas', true);

    dataLayer.push({ 'event': 'cookies-aceptadas' });
});

botonRechazarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    localStorage.setItem('cookies-aceptadas', false); // ← Guardamos rechazo

    dataLayer.push({ 'event': 'cookies-rechazadas' }); // ← puedes rastrear esto también
});


