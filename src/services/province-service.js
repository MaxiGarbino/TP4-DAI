import ProvinceRepository from '../repositories/province-repository.js';
export default class ProvinceService{
    getAllAsync = async () => {
        const repo = new ProvinceRepository();
        const arrayProvincias= await repo.getAllAsync();
        let resArray
        if(arrayProvincias != ''){
            resArray = [arrayProvincias, 200];
        }
        else{
            resArray = ["No se encuentran provincias", 404]
        }
        return resArray;
     
    }
    getByIdAsync = async (id) =>{
        const repo = new ProvinceRepository();
        const arrayProvincias= await repo.getByIdAsync(id);
        let resArray;
        if (arrayProvincias != '') {
            
            resArray = [arrayProvincias,200];;
        } else {
            resArray = ["Provincia no encontrada",404];
        }
        return resArray;
    }
    createAsync = async (body) => {
        const repo = new ProvinceRepository();
        let resArray = repo.createAsync(body);
        return resArray;
    }
    /*app.delete("/api/province/:id", (req, res) => {
    const id = req.params.id;
    const index = provincias.findIndex(provincia => provincia.id == id);
    if (index !== -1) {
        provincias.splice(index, 1);
        res.status(200).json({ mensaje: "Provincia eliminada correctamente" });
    } else {
        res.status(404).json({ error: "Provincia no encontrada" });
    }
});*/
    deleateAsync = async (id) => {
        const repo = new ProvinceRepository();
        let resArray = repo.deleateAsync(id);
        return resArray
        
    }
       
}