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
    
});

router.post('', async(req, res) => {
    const body = req.body;
    const resArray = await svc.createAsync(body);
    res.status(resArray[1]).send(resArray[0]);
});

router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    const resArray = await svc.deleateAsync(id);
    res.status(resArray[1]).send(resArray[0]);
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

export default router;
