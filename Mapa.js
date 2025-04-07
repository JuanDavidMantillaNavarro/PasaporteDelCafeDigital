//MENÚ HAMBURGUESA
var menu = document.getElementById('hamburguesa');

// method
function toggleMenu(event) {
    //this.classList.toggle('is-active');
    document.querySelector(".menu").classList.toggle("is_active");
    event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

//Mapa
var map = L.map('map').setView([4.6512695589245565, -74.07262681705785], 13); // Coordenadas iniciales

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    
}).addTo(map);

var cafeterias = [
    { nombre: "Coffe stylers", lat: 4.644940422563745, lng: -74.07026141705792, dir: "Cl. 57 #19-35", imagen: "Imagenes/Foto Cafeterias/Coffe Stylers.jpg" }, 
    { nombre: "Café de la Tinteria", lat: 4.64061079399297, lng: -74.06128739192326, dir: "Cl. 54a #4 A - 21 Segundo Piso", imagen: "Imagenes/Foto Cafeterias/cafe-de-la-tinteria.jpg" },
    { nombre: "QUIPILE Coffe", lat: 4.633418321064459, lng: -74.07559460541583, dir: "Cra. 24 #42-71", imagen: "Imagenes/Foto Cafeterias/Quipile.jpg" },
    { nombre: "Enamorados", lat: 4.631547233374614, lng: -74.07146113425158, dir: "Cra 18 # 40a - 71", imagen: "Imagenes/Foto Cafeterias/Enamorados.jpg" },
    { nombre: "Craneo Sacral", lat: 4.62933725360059, lng: -74.06574957472944, dir: "Cra. 8 #41-38", imagen: "Imagenes/Foto Cafeterias/Craneo Sacral.webp" },
    { nombre: "Los Amantes Del Café", lat: 4.613408812438861, lng: -74.06619004589365, dir: "Cl. 26d #4-15", imagen: "Imagenes/Foto Cafeterias/Los-Amantes-del-Cafe-Local.webp" },
    { nombre: "Agüita negra", lat: 4.613141341486356, lng: -74.06662870541582, dir: "Cra. 4a #26c-4", imagen: "Imagenes/Foto Cafeterias/Aguita Negra.jpg" },
    { nombre: "Vronx 60", lat: 4.6008357807018525, lng: -74.08417830356521, dir: "Cra. 15a #8-50", imagen: "Imagenes/Foto Cafeterias/vronx.jpg" },
    { nombre: "Café Jaguar", lat: 4.5976787816530145, lng: -74.07062944774428, dir: "Cl. 12b #2-85", imagen: "Imagenes/Foto Cafeterias/jaguar.jpg" },
    { nombre: "Café del mercado", lat: 4.596266687742115, lng: -74.07047923425161, dir: "Cra. 2 #11-88", imagen: "Imagenes/Foto Cafeterias/Cafe del mercado.jpg" },
    { nombre: "Café Racer", lat: 4.72306743874467, lng: -74.05202323721879, dir: "Cra. 45a # 137 - 59", imagen: "Imagenes/Foto Cafeterias/Cafe racer.jpg" },
    { nombre: "Café González", lat: 4.704163441909981, lng: -74.0488644747295, dir: "Sede 1 Av. Cra 19 #123-60", imagen: "Imagenes/Foto Cafeterias/cafe Gonzalez 5-min.webp" },
    { nombre: "Niebla", lat: 4.696677301655692, lng: -74.03900557186142, dir: "Ac 116 #11c - 50", imagen: "Imagenes/Foto Cafeterias/Niebla.jpg" },
    { nombre: "Café González", lat: 4.665287941020146, lng: -74.05523370356526, dir: "Sede 2 Av Cl 80 #12-55", imagen: "Imagenes/Foto Cafeterias/cafe Gonzalez 5-min.webp" },
];

var lista = document.getElementById('cafeteriaList');

cafeterias.forEach(function(cafeteria) {

    // Icono cafeterias
       // se clona el template de los marcadores del mapa
       let template = document.getElementById('template-marcador');
       let marcador = template.content.cloneNode(true);
   
       // Asignamos valores de forma dinamica
       marcador.querySelector('img').src = cafeteria.imagen;
       marcador.querySelector('img').alt = cafeteria.nombre;
       marcador.querySelector('.texto-cafeteria').textContent = cafeteria.nombre;
   
       // Se convierte el marcador HTML a string
       let div = document.createElement('div');
       div.appendChild(marcador);
       let marcadorHTML = div.innerHTML;
   
       // Creamos el icono
       let iconoCafe = L.divIcon({
           className: 'icono-cafeteria',
           html: marcadorHTML,
           iconAnchor: [25, 25]
       });
   
       L.marker([cafeteria.lat, cafeteria.lng], { icon: iconoCafe })
           .addTo(map)
           .bindPopup("<b>" + cafeteria.nombre + "</b><br>Dirección: " + cafeteria.dir);

           const icono = document.createElement('div');
           icono.classList.add('icono-tab');
           icono.style.width = '111px';
           icono.style.height = '111px';
           icono.style.backgroundImage = `url(${encodeURI(cafeteria.imagen)})`;
           icono.style.backgroundSize = 'cover';
           icono.style.borderRadius = '50%';
           icono.style.flex = '0 0 auto';
           icono.style.cursor = 'pointer';
           icono.title = cafeteria.nombre;

           // Capa oscura
           const overlay = document.createElement('div');
           overlay.classList.add('overlay');
           icono.appendChild(overlay);

           // Texto encima
           const texto = document.createElement('div');
           texto.classList.add('texto-cafeteria');
           texto.innerText = cafeteria.nombre;
           icono.appendChild(texto);
       
           icono.onclick = function () {
               scrollToPosition(cafeteria.lat, cafeteria.lng);
           };
           lista.appendChild(icono);
   });

// Funcion para mover el mapa al punto de una cafetería
function scrollToPosition(lat, lng) {
    map.setView([lat, lng], 15); // Zoom de 15
}

function toggleTab() {
const tab = document.getElementById('cafeteriaTab');
tab.classList.toggle('open');

// Cambiar icono de boton al abrir o cerrar
const button = tab.querySelector('.toggle-button');
button.textContent = tab.classList.contains('open') ? '⬇️' : '⬆️';
}