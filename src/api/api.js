import axios from "axios";

export const api = axios.create({baseURL: 'https://autoflixapi.onrender.com/'})  //http://localhost:5050/

export const post = async(url, setData) => {
    try {
        const respuesta = await api.get(url);
        setData(respuesta.data);
    } catch (error) {
        console.error("Error al buscar datos:", error);
    }
}

export const crear = async (url, datos, callback) => {
    try {
        const respuesta = await api.post(url, datos);
        if (callback) {
            callback(respuesta.data);
        }
    } catch (error) {
        console.error("Error al crear datos:", error);
    }
}

export const actualizar = async (url, datos, callback) => {
    try {
        const respuesta = await api.put(url, datos);
        if (callback) {
            callback(respuesta.data);
        }
    } catch (error) {
        console.error("Error al actualizar datos:", error);
    }
}

export const eliminar = async (url, callback) => {
    try {
        const respuesta = await api.delete(url);
        if (callback) {
            callback(respuesta.data);
        }
    } catch (error) {
        console.error("Error al eliminar datos:", error);
    }
}

export const getData = async (url, setData) => {
    try {
        const response = await api.get(url);
        setData(response.data);
    } catch (error) {
        console.error("Error al mostrar datos:", error);
    }
}