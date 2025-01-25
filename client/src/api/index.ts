import axios from "axios"
import { getFromLocalStorage } from "../storage";

const API_URL = 'http://localhost:5100/api'
const {token} = getFromLocalStorage('userInfo')?getFromLocalStorage('userInfo'):''


const config = {
    headers: {
        Authorization:token
    }
};


//PRO prief proccesses
const API_PRO = {
    get: (url: string) =>
        axios.get(`${API_URL}${url}`, config)

    ,
    delete: (url: string) =>
        axios.delete(`${API_URL}${url}`, config)

    ,
    post: (url: string, body: any) =>
        axios.post(`${API_URL}${url}`, body, config)

    ,
    put: (url: string, body: any) =>
        axios.put(`${API_URL}${url}`, body, config)


}

export default API_PRO;

