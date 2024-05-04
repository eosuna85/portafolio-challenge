const imagenPagina = document.getElementById('imagen__proyecto');
const textoTituloTarjeta = document.getElementById('titulo__proyecto');
const textoTarjeta = document.getElementById('texto__proyecto');
const repositorioProyecto = document.getElementById('repositorio__proyecto');
const viewProyecto = document.getElementById('view__proyecto');
const selecionProyectoEurekaGrupal = document.getElementById('eureka__charter__grupal');
const selecionProyectoClasicosGaraje = document.getElementById('clasicos__garage');
const selecionProyectoNumeroSecreto = document.getElementById('numero__secreto');
const selecionProyectoEncriptadorTexto = document.getElementById('encriptador__texto');
const selecionProyectoEureka2 = document.getElementById('eureka__charter__2');

function cambiarTarjeta(imagen,titulo,parrafo,repositorio,view){
    imagenPagina.setAttribute('src',imagen);
    textoTituloTarjeta.innerText = titulo;
    textoTarjeta.innerText = parrafo;
    repositorioProyecto.setAttribute('href',repositorio);
    viewProyecto.setAttribute('href',view);

};

selecionProyectoEurekaGrupal.addEventListener('click', ()=>{
    cambiarTarjeta('./img/sitios/Eureka_Charter_Grupal.png',
    'Eureka Charter - Trabajo Grupal',
    'Proyecto Codo a Codo - HTML, CSS y JavaScript',
    'https://github.com/eosuna85/Proyecto-Eureka-Charter',
    'https://eosuna85.github.io/Proyecto-Eureka-Charter/');
});

selecionProyectoClasicosGaraje.addEventListener('click', ()=>{
    cambiarTarjeta('./img/sitios/Clasicos_Garage.png',
    'Clasicos Garage',
    'Proyecto Codo a Codo - HTML, CSS, JavaScript, Flask, Vue, Python, MySQL',
    'https://github.com/eosuna85/TPO-Clasicos-Garage',
    'https://eosuna85.github.io/TPO-Clasicos-Garage/');
});

selecionProyectoNumeroSecreto.addEventListener('click',()=>{
    cambiarTarjeta('./img/sitios/Juego_Secreto.png',
    'Numero Secreto',
    'Challenge Alura - HTML, CSS y JavaScript',
    'https://github.com/eosuna85/Juego_numero_secreto',
    'https://eosuna85.github.io/Juego_numero_secreto/');
});

selecionProyectoEncriptadorTexto.addEventListener('click', ()=>{
    cambiarTarjeta('./img/sitios/Encriptador_de_Texto.png',
    'Encriptador de Texto',
    'Challenge Alura - HTML, CSS y JavaScript',
    'https://github.com/eosuna85/eosuna85-Challenge__Encriptador-de-Texto',
    'https://eosuna85.github.io/eosuna85-Challenge__Encriptador-de-Texto/');
});

selecionProyectoEureka2.addEventListener('click', ()=>{
    cambiarTarjeta('./img/sitios/Eureka_Charter_2.0.png',
    'Eureka Charter 2.0',
    'Proyecto Personal - HTML, CSS y JavaScript',
    'https://github.com/eosuna85/Eureka-Charter-2.0',
    'https://eosuna85.github.io/Eureka-Charter-2.0/');
});

