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

            const allSizes = [36, 37, 38, 39, 40, 41, 42]; // Rango de talles

            const uniqueProducts = products.reduce((acc, product) => {
                // Asegurarse de que `size` y `cantIngr` sean arrays
                const sizes = Array.isArray(product.size) ? product.size : [product.size];
                const quantities = Array.isArray(product.cantIngr) ? product.cantIngr : [product.cantIngr];

                // Buscar si ya existe un producto con el mismo `name`, `sex` y `color` en el acumulador
                const existingProduct = acc.find(
                    (p) =>
                        p.name === product.name &&
                        p.sex === product.sex &&
                        p.color === product.color
                );

                if (existingProduct) {
                    // Si ya existe, combinar los talles y cantidades en el objeto `stock`
                    sizes.forEach((size, index) => {
                        existingProduct.stock[size] =
                            (existingProduct.stock[size] || 0) + quantities[index];
                    });
                } else {
                    // Si no existe, inicializar el objeto `stock` con todos los talles en 0
                    const stock = allSizes.reduce((stockAcc, size) => {
                        stockAcc[size] = 0; // Inicializar todos los talles con 0
                        return stockAcc;
                    }, {});

                    // Actualizar el objeto `stock` con los talles y cantidades del producto actual
                    sizes.forEach((size, index) => {
                        stock[size] = quantities[index];
                    });

                    acc.push({
                        ...product,
                        stock, // Nueva propiedad `stock` con todos los talles
                    });
                }

                return acc;
            }, []); // Inicializa el acumulador como un array vacío

            // Eliminar las propiedades `size` y `cantIngr` de los productos en `uniqueProducts`
            uniqueProducts.forEach((product) => {
                delete product.size;
                delete product.cantIngr;
            });

            return uniqueProducts;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);