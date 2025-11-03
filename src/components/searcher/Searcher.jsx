import React from 'react';
import { useState, useEffect } from 'react';
import "./Searcher.css"
import axios from 'axios';


const Searcher = ({ products, setProductData, busqueda, setBusqueda }) => {

    const handleChange = e => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda) => {
        var response = products.filter((elemento) => {
            if (elemento.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.brand.toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.sex.toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.sport.toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento;
            }
        });
        setProductData(response);
    }

    return (
        <div className='adminProductsSearchInput-container'>
            <input
                className='adminProductsSearchInput'
                value={busqueda}
                placeholder='Buscar producto por nombre, marca, sexo o disciplina '
                onChange={handleChange}
            />
        </div>
    );
}
export default Searcher;