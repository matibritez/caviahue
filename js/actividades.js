document.addEventListener("DOMContentLoaded", function () {
    const actividades = [
        { nombre: "Senderismo en las montañas", lugar: "Sendero a Laguna Escondida,Partiendo de la Av. de la Costanera, se toma la calle Volcán Copahue en dirección oeste. Luego de transitar unos 500 mts, se dobla a la izquierda y se bordea la calle por unos 150 mts. Hay que estar atentos, dado que a nuestra mano izquierda hay un cartel que indica el inicio del sendero, pero no esta muy visible. ", fecha: "15-10-2023 7 a 16hs" },
        { nombre: "Tour en bicicleta", lugar: "Se hará un recorrido entre araucarias y montañas en las cuales se visitará el Salto del Agrio, la Laguna Hualcupén, la naciente del Río Agrio y el Puente de Piedra, entre otros lugares atractivos de la región.", fecha: "20-10-2023 9 a 13hs" },
        { nombre: "Esquí ", lugar: "Estación de Esquí", fecha: "05-11-2023 8 a 12hs" },
    ];

    const actividadesContainer = document.getElementById("actividades");

    actividades.forEach((actividad) => {
        const actividadElement = document.createElement("div");
        actividadElement.classList.add("activity");
        actividadElement.innerHTML = `
            <h2>${actividad.nombre}</h2>
            <p>Lugar: ${actividad.lugar}</p>
            <p>Fecha: ${actividad.fecha}</p>
        `;
        actividadesContainer.appendChild(actividadElement);
    });
});


const title = document.querySelector('h1');

function animateTitle() {
    title.style.transform = 'scale(1.2)';
    setTimeout(() => {
        title.style.transform = 'scale(1)';
    }, 1000);
}


animateTitle();