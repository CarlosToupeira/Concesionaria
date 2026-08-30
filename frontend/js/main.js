const container = document.querySelector("#cars-grid");
const searchInput = document.querySelector("#search-input");

let globalCarList = [];

function renderCars(carList) {
    //Limpieza del contenedor div con el id #cars-grid
    container.innerHTML = "";

    if (carList.lenght === 0) {
        container.innerHTML = `<p style="color: #a0a6b1; grid-column: 1/-1;">No se encontraron vehículos que coincidan con tu búsqueda.</p>`;
        return;
    }

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

// Carga de autos usando async / await
async function loadCars() {
    try {
        const response = await fetch("js/cars.json");
        if (!response.ok) {
            throw new Error("No se puede obtener el archivo JSON");
        }
        globalCarList = await response.json() // Espera que el JSON se convierta a objeto y guarda los datos en globalCarList || Fix error eliminé const porque no dejaba filtrar la lista a marcas o modelos específicos ademas de ser un arreglo global.
        renderCars(globalCarList);
    } catch (error) {
        console.error("Hubo un problema al cargar los autos:", error);
    }
}

//Evento de búsqueda en tiempo real
searchInput.addEventListener("input", (event) => {
    const searchText = event.target.value.toLowerCase().trim();

    //filtro el arreglo global
    const carFilter = globalCarList.filter(car =>
        car.name.toLowerCase().includes(searchText)
    );

    //se renderiza solo tarjetas que pasaron por el filtro
    renderCars(carFilter);
});

// LLamada a la función
loadCars();