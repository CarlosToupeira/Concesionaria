const container = document.querySelector("#cars-grid");

function renderizarAutos(carList) {
    //Limpieza del contenedor div con el id #cars-grid
    container.innerHTML = "";

    carList.forEach(car => {
        // por cada auto de mi arreglo agarro los datos necesarios para crear tarjetas html al contenedor div
        const cardHTML =  `
        <article class="car-card">
            <img src="${car.image}" alt= "${car.name}">
            <div class="car-info">
                <h3>${car.name}</h3>
                <p class="specs">${car.specs}</p>
                <p class="price">${car.price}</p>
                <a href="#" class="button-secondary">Ver Detalles</a>
            </div>
        </article>
        `;

        //sumo la tarjeta al contenedor div por cada auto
        container.innerHTML += cardHTML;
    });
}

//Petición fetch de manera que use Promesas (Cuando pueda obtener el archivo JSON genera una respuesta con los datos del JSON, sino genera errores.)
fetch("js/cars.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al cargar el archivo JSON");
        }
        return response.json(); // Retorna la respuesta de texto JSON a un array de JS
    })
    .then(data => {
        console.log("Datos cargados dinámicamente desde el JSON:", data);
        renderizarAutos(data) // llamo la funcion con los datos obtenídos correctamente del JSON
    })
    .catch(error => {
        console.error("Hubo un problema con la petición Fetch:", error);
    });
