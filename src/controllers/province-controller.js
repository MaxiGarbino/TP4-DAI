import {provincias} from "../entities/province.js"

export const getAllProvinces = (req, res) => {
    res.json(provincias);
};

export const getProvinceById = (req, res) => {
    const id = req.params.id;
    const province = provincias.find(province => province.id == id);
    if (province) {
        res.json(province);
    } else {
        res.status(404).json({ error: "Provincia no encontrada" });
    }
};

