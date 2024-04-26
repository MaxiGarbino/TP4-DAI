import express from "express";
import cors from "cors";
import {provincias} from "./src/entities/province.js";

const app = express();
const port = 3000;
app.use(cors()); 
app.use(express.json()); 


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

app.get("/api/province", (req, res) => {
    res.send(provincias);
});

app.get("/api/province/:id", (req,res)=>{
    const id = req.params.id;
    const index = provincias.findIndex(provincia => provincia.id == id);
    if (index !== -1) {
        res.send(provincias[index]);
    } else {
        res.status(404).send({ error: "Provincia no encontrada" });
    }
})
app.post('/api/province',async(req,res)=>{
    try{
        let nombre = req.body.name;
        let full_nombre = req.body.full_name;
        let latitud = parseInt(req.body.latitude);
        let longitud = parseInt(req.body.longitude);
        let display_orden = parseInt(req.body.display_order);
        provincias.push({
        id: (provincias.length+1),
        name: nombre,
        full_name: full_nombre,
        latitude: latitud,
        longitude:longitud,
        display_order:display_orden
    });
    res.status(201).send("created");
    } catch(error){
        console.log(error)
        res.status(400).send(error.message);
    }
    
})

app.put("/api/province", async(req,res) =>
{
    const id = req.body.id;
    console.log(req.body.name)
    const provincefv = provincias.find(province => province.id == id);
    if (provincefv) {
        if( req.body.name="" || req.body.name.length <= 3)
        {
            res.status(400).send({error: "No cumple con las reglas de negocio"})
        }
        else
        {
            res.status(201).send("Created")
            provincias[id-1] = {id:id,name:req.body.name,full_name : req.body.full_name,latitude: req.body.latitude,longitude: req.body.longitude,display_order : req.body.display_order}
        }
    } 
    else {
        res.status(404).send({ error: "Provincia no encontrada" });
    }

})

app.delete("/api/province/:id", (req, res) => {
    const id = req.params.id;
    const index = provincias.findIndex(provincia => provincia.id == id);
    if (index !== -1) {
        provincias.splice(index, 1);
        res.status(200).send({ mensaje: "Provincia eliminada correctamente" });
    } else {
        res.status(404).send({ error: "Provincia no encontrada" });
    }
});

