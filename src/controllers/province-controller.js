import {provincias} from "../entities/province.js"

export const mostrarPorvincia = (req, res) => {
    res.json(provincias);
};

export const buscarProvincia= (req, res) => {
    const id = req.params.id;
    const province = provincias.find(province => province.id == id);
    if (province) {
        res.send(province);
    } else {
        res.status(404).send({ error: "Provincia no encontrada" });
    }
};

export const eliminarProvincia = (req, res) => {
    const id = req.params.id;
    const province = provincias.find(province => province.id == id);
    if (province) {
        res.json(province);
    } else {
        res.status(404).json({ error: "Provincia no encontrada" });
    }
};
