import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { provincias } from '../entities/province.js';
import ProvinceRepository from '../repositories/province-repository.js';
import ProvinceService from '../services/province-service.js'

const router = Router();
const svc = new ProvinceService();

router.get('', async(req, res) => {
    const resArray = await svc.getAllAsync();
    res.status(resArray[1]).send(resArray[0]);
});

router.get('/:id', async(req, res) => {
    
    const id = req.params.id;
    const resArray = await svc.getByIdAsync(id);
    res.status(resArray[1]).send(resArray[0]);
    /*const id = req.params.id;
    const index = provincias.findIndex(provincia => provincia.id == id);
    if (index !== -1) {
        res.send(provincias[index]);
    } else {
        res.status(404).send({ error: "Provincia no encontrada" });
    }
    */
});

router.post('', (req, res) => {
    try {
        let nombre = req.body.name;
        let full_nombre = req.body.full_name;
        let latitud = parseInt(req.body.latitude);
        let longitud = parseInt(req.body.longitude);
        let display_orden = parseInt(req.body.display_order);
        provincias.push({
            id: (provincias.length + 1),
            name: nombre,
            full_name: full_nombre,
            latitude: latitud,
            longitude: longitud,
            display_order: display_orden
        });
        res.status(201).send("created");
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message);
    }
});

router.put('', (req, res) => {
    const id = req.body.id;
    console.log(req.body.name)
    const provincefv = provincias.find(province => province.id == id);
    if (provincefv) {
        if (req.body.name = "" || req.body.name.length <= 3) {
            res.status(400).send({ error: "No se puede" })
        }
        else {
            res.status(201).send("Updated")
            provincias[id - 1] = { id: id, name: req.body.name, full_name: req.body.full_name, latitude: req.body.latitude, longitude: req.body.longitude, display_order: req.body.display_order }
        }
    }
    else {
        res.status(404).send({ error: "Provincia no encontrada" });
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = ProvinceRepository.deleteByIdAsync(id);
    if (index !== -1) {
        res.status(200).send({ mensaje: "Provincia eliminada correctamente" });
    } else {
        res.status(404).send({ error: "Provincia no encontrada" });
    }
});

export default router;
