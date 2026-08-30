// Array de objetos con los datos de los vehículos
const cars = [
    {
        id: 1,
        name: "Chevrolet Camaro",
        specs: "2023 • 12.000 km • Nafta",
        price: "$65.000.000",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500"
    },
    {
        id: 2,
        name: "Ferrari LaFerrari",
        specs: "2013 • 0 km • Nafta",
        price: "$120.000.000",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500"
    },
    {
        id: 3,
        name: "Audi R8 V10",
        specs: "2015 • 5.000 km • Nafta",
        price: "$85.000.000",
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500"
    },
    {
        id: 4,
        name: "Ford Mustang Mach 1",
        specs: "1969 • 18.000 km • Nafta",
        price: "$55.000.000",
        image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=500",
    }
];

// Log de consola para saber que paso
console.log("Cargando catálogo de autos:", cars);

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

// ejecuto la función con mi arreglo de autos creada
renderizarAutos(cars);