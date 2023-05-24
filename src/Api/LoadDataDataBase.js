import { API } from './API';
import axios from 'axios';


// show all data with id Category
export async function LoadData(nameCategory, pageNumber) {

    const response = await axios.get(`${API.USERS.GET}/itemsCategoryId/${nameCategory}/${pageNumber}`);
    return response.data;
}


// here take count all value id category
export async function countData(nameCategory) {

    const response = await axios.get(`${API.USERS.GET}/count/${nameCategory}`);
    return response.data;
}