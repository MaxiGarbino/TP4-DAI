
import pkg from 'pg'
const { Client, Pool } = pkg;
import { provincias } from '../entities/province.js';
export default class ProvinceRepository {
    getAllAsync = async () => {
    let returnArray = provincias;
    return returnArray;
    }
    getByIdAsync = async (id) => {
        const index = provincias.findIndex(provincia => provincia.id == id);
        return provincias[index];
    }
    createAsync = async (body) => {
        try{
        let nombre = body.name;
        let full_nombre = body.full_name;
        let latitud = parseInt(body.latitude);
        let longitud = parseInt(body.longitude);
        let display_orden = parseInt(body.display_order);
        provincias.push({
            id: (provincias.length + 1),
            name: nombre,
            full_name: full_nombre,
            latitude: latitud,
            longitude: longitud,
            display_order: display_orden
        });
        return ["created",200];
        }
        catch (error){
            return [error,404];
        }
    }
    deleateAsync = async (id) => {
        const index = provincias.findIndex(provincia => provincia.id == id);
        let resArray;
        if (index !== -1) {
            provincias.splice(index, 1);
            resArray = ["Provincia eliminada correctamente",200];
        } else {
            resArray = ["Provincia no encontrada",404];
        }
        return resArray;
    }
    /*
    getByIdAsync = async (id) => {...}
    createAsync = async (entity) => {...}
    updateAsync = async (entity) => {...}
    deleteByIdAsync = async (id) => {...}*/
}