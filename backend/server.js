const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000; // Puerto donde va a estar ubicado el servidor express backend

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.get("/api/cars", (req, res) => {
    const archiveRoute = path.join(__dirname, "cars.json");
    fs.readFile(archiveRoute, "utf-8", (error, data) => {
        if (error) {
            console.error("Error al leer el archivo:", error);
            return res.status(500).json({ message: "Error interno del servidor" });
        }

    const cars = JSON.parse(data); // Convierte la data en Array de objetos JavaScript
    res.json(cars); // Express vuelve a convertir a JSON para configurar los encabezados HTTP automáticamente
    });
});

// Inicializa la escucha del servidor
app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en http:localhost:${PORT}`);
});
