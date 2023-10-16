// Definir un array con información para las tarjetas
const datosTarjetas = [
    {
        imagenSrc: './img/lagoCaviahue.png',
        imagenAlt: 'Imagen 1',
        texto: 'Senderismo en la Montaña'
    },
    {
        imagenSrc: './img/bici.png',
        imagenAlt: 'Imagen 2',
        texto: 'Tour en Bici'
    },
    {
        imagenSrc: './img/ski.png',
        imagenAlt: 'Imagen 3',
        texto: 'Caviahue Ski Resort'
    }
];

//una referencia al contenedor de tarjetas en el DOM
const tarjetaContainer = document.getElementById('tarjeta-container');

// Función para crear tarjetas desde el array
function crearTarjetasDesdeArray() {
    // Iterar a través del array de datos de tarjetas
    datosTarjetas.forEach((tarjetaData) => {
        // Crear un elemento div para la tarjeta
        const nuevaTarjeta = document.createElement('div');
        nuevaTarjeta.classList.add('tarjeta'); 

        // Crear un elemento de imagen
        const imagen = document.createElement('img');
        imagen.src = tarjetaData.imagenSrc; // Ruta de la imagen desde el array
        imagen.alt = tarjetaData.imagenAlt;

        // Crear un elemento de parrafo para el texto
        const texto = document.createElement('p');
        texto.textContent = tarjetaData.texto; // Texto desde el array

        // Agregar la imagen y el texto a la tarjeta
        nuevaTarjeta.appendChild(imagen);
        nuevaTarjeta.appendChild(texto);

        // Agregar la tarjeta al contenedor
        tarjetaContainer.appendChild(nuevaTarjeta);
    });
}

// Llama a la función para crear las tarjetas al cargar la página
crearTarjetasDesdeArray();


// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Datos de experiencias (puedes cargar estos datos desde un servidor o una fuente externa)
    const experienciasData = [
        { titulo: "Laguna Hualcapen", imagen: "./img/lagunaHualcapen.png" },
        { titulo: "Cascadas del Agrio", imagen: "./img/cascadasAgrio.png    " },
        { titulo: "Volcan Copahue", imagen: "./img/volcanCopahuee.png" },
        { titulo: "Salto del Agrio", imagen: "./img/saltoagrio.png" }
    ];

    // Obtener el contenedor de experiencias
    const experienciasContainer = document.getElementById("experiencias-container");

    // Crear tarjetas de experiencias dinamicamente
    experienciasData.forEach(experiencia => {
        const card = document.createElement("div");
        card.classList.add("card");

        const imagen = document.createElement("img");
        imagen.src = experiencia.imagen;
        imagen.alt = `Descripción de la imagen de ${experiencia.titulo}`;

        const titulo = document.createElement("h3");
        titulo.textContent = experiencia.titulo;

        card.appendChild(titulo);
        card.appendChild(imagen);
        experienciasContainer.appendChild(card);
    });
});


// Muestra u oculta el botón de flecha para arriba según la posición de desplazamiento
window.onscroll = function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Función para desplazarse hacia arriba al hacer clic en el botón
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const name=document.getElementById("name");
const phone=document.getElementById("phone");
const email=document.getElementById("email");
const message=document.getElementById("message");
const form=document.getElementById("form");
const parrafo=document.getElementById("warnings");

form.addEventListener('submit',e=>{
    e.preventDefault();
    checkinputs();
});


function checkinputs(){
    const namevalue=name.nodevalue.trim();
    const phonevalue=phone.nodevalue.trim();
    const emailvalue=email.nodevalue.trim();
    const message=message.nodevalue.trim();

    if (namevalue===''){

        seterrorfor(name,"No puede dejar el Apellido y nombre en blanco");
    }else{
        setsuccessfor(name);
    }
    if (phonevalue===''){

        seterrorfor(phone,"No puede dejar el teléfono en blanco");
    }else{
        setsuccessfor(phone);
    }
}

function seterrorfor(input,message){
    const formcontrol=input.parentelement;
    const small=formcontrol.queryselector('small');
    formcontrol.classname='entrada-datos error';
    small.innertext=message;
}

function setsuccessfor(input){
    const formcontrol=input.parentelement;
    formcontrol.classname='entrada-datos success';
}   

