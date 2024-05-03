
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
    /*
    getByIdAsync = async (id) => {...}
    createAsync = async (entity) => {...}
    updateAsync = async (entity) => {...}
    deleteByIdAsync = async (id) => {...}*/
}