import React, { useState, useEffect } from 'react';
import "./Filter.css";
import { useSelector } from 'react-redux';

const Filter = ({ products, setProductsShow }) => {
    const product = useSelector((state) => state.products.product);
    const [filters, setFilters] = useState({
        sex: null,
        brand: null,
        sport: null,
    });

    // Aplica los filtros cada vez que cambie el estado `filters`
    useEffect(() => {
        let filteredProducts = products;

        if (filters.sex) {
            filteredProducts = filteredProducts.filter(product => product.sex === filters.sex);
        }
        if (filters.brand) {
            filteredProducts = filteredProducts.filter(product => product.brand === filters.brand);
        }
        if (filters.sport) {
            filteredProducts = filteredProducts.filter(product => product.sport === filters.sport);
        }

        if(!product){
            filteredProducts = products;
        }

        if (filteredProducts.length === 0) {
            alert("No se encontraron productos con los filtros seleccionados.");
            clearFilters();
            return;
        }

        setProductsShow(filteredProducts);
    }, [filters, products, setProductsShow]); // Se ejecuta cuando `filters` cambia

    const handleFilterChange = (type, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [type]: value,
        }));
    };

    const clearFilters = () => {
        setFilters({
            sex: null,
            brand: null,
            sport: null,
        });
    };

    return (
        <div className='filter-container'>
            <button onClick={() => clearFilters()}>Limpiar Filtros</button>
            <h4>Filtros:</h4>
            <h5 onClick={() => handleFilterChange('sex', 'Hombre')}>Hombre</h5>
            <h5 onClick={() => handleFilterChange('sex', 'Mujer')}>Mujer</h5>
            <h4>Marcas:</h4>
            <h5 onClick={() => handleFilterChange('brand', 'adidas')}>Adidas</h5>
            <h5 onClick={() => handleFilterChange('brand', 'nike')}>Nike</h5>
            <h5 onClick={() => handleFilterChange('brand', 'fila')}>Fila</h5>
            <h5 onClick={() => handleFilterChange('brand', 'puma')}>Puma</h5>
            <h4>Actividades:</h4>
            <h5 onClick={() => handleFilterChange('sport', 'running')}>Running</h5>
            <h5 onClick={() => handleFilterChange('sport', 'trainning')}>Trainning</h5>
            <h5 onClick={() => handleFilterChange('sport', 'trekking')}>Trekking</h5>
            <h4>Tus Filtros:</h4>
            <h5>Sexo: {filters.sex || "-"}</h5>
            <h5>Marca: {filters.brand || "-"}</h5>
            <h5>Actividad: {filters.sport || "-"}</h5>
        </div>
    );
};

export default Filter;