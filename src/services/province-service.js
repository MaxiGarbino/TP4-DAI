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
            resArray = ["No se encuentra la provincia", 404]
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
       
}