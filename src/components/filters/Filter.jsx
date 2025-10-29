import React from 'react';
import "./Filter.css";

const Filter = ({ products, setProductsShow }) => {
    //Filtros por sexo:
    const menFilter = products.filter(product => product.sex == "men");
    const womenFilter = products.filter(product => product.sex == "women");
    //Filtros por marcas:
    const adidasFilter = products.filter(product => product.brand == "adidas");
    const nikeFilter = products.filter(product => product.brand == "nike");
    const filaFilter = products.filter(product => product.brand == "fila");
    const pumaFilter = products.filter(product => product.brand == "puma");
    //Filtros por actividad:
    const runningFilter = products.filter(product => product.sport == "running");
    const trainningFilter = products.filter(product => product.sport == "trainning");
    const trekkingFilter = products.filter(product => product.sport == "trekking");


    return (
        <div className='filter-container'>
            <h3>Filtros:</h3>
            <h4 onClick={() => setProductsShow([])}>Todo</h4>
            <h4 onClick={() => setProductsShow(menFilter)}>Hombre</h4>
            <h4 onClick={() => setProductsShow(womenFilter)}>Mujer</h4>
            <h3>Marcas:</h3>
            <h4 onClick={() => setProductsShow(adidasFilter)}>Adidas</h4>
            <h4 onClick={() => setProductsShow(nikeFilter)}>Nike</h4>
            <h4 onClick={() => setProductsShow(filaFilter)}>Fila</h4>
            <h4 onClick={() => setProductsShow(pumaFilter)}>Puma</h4>
            <h3>Actividades:</h3>
            <h4 onClick={() => setProductsShow(runningFilter)}>Running</h4>
            <h4 onClick={() => setProductsShow(trainningFilter)}>Trainning</h4>
            <h4 onClick={() => setProductsShow(trekkingFilter)}>Trekking</h4>
        </div>
    );
}

export default Filter;
