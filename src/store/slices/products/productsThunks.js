import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


// Crear un producto:
export const createProduct = createAsyncThunk(
    "products/createProduct",
    async (productData, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:4000/api/products", productData);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Leer productos:
export const readProducts = createAsyncThunk(
    "products/readProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:4000/api/products");
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Leer un producto:
export const readProduct = (el) => {

    return {
        type: "products/readProduct",
        payload: el
    }
}

// Actualizar un producto:
export const updateProducts = createAsyncThunk(
    "products/updateProducts",
    async (productData, { rejectWithValue }) => {
        try {
            const response = await axios.put(`http://localhost:4000/api/products/${productData._id}`, productData);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Eliminar un producto:
export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (productId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/products/${productId}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Listado de productos sin repetir (por nombre, sexo y color):
export const listSameNameSexColorProducts = createAsyncThunk(
    "products/listSameNameSexColorProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:4000/api/products");
            const products = response.data;
            const uniqueProducts = products.reduce((acc, product) => {
                // Buscar si ya existe un producto con el mismo `name`, `sex` y `color` en el acumulador
                const existingProduct = acc.find(
                    (p) =>
                        p.name === product.name &&
                        p.sex === product.sex &&
                        p.color === product.color
                );

                if (existingProduct) {
                    // Si ya existe, agregar `size` y `color` al array, permitiendo duplicados
                    existingProduct.size = [...existingProduct.size, product.size];
                    existingProduct.cantIngr = [...existingProduct.cantIngr, product.cantIngr];
                } else {
                    // Si no existe, agregar el producto al acumulador
                    acc.push({
                        ...product,
                        size: [product.size], // Convertir `size` en un array
                        cantIngr: [product.cantIngr], // Convertir `cantIngr` en un array
                    });
                }
                return acc;
            }, []); // Inicializa el acumulador como un array vacío
            return uniqueProducts;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);