// import React from 'react';
// import "./Filter.css";

// const Filter = ({ products, setProductsShow }) => {
//     //Filtros por sexo:
//     const menFilter = products.filter(product => product.sex == "Hombre");
//       const womenFilter = products.filter(product => product.sex == "Mujer");
//     //Filtros por marcas:
//     const adidasFilter = products.filter(product => product.brand == "adidas");
//     const nikeFilter = products.filter(product => product.brand == "nike");
//     const filaFilter = products.filter(product => product.brand == "fila");
//     const pumaFilter = products.filter(product => product.brand == "puma");
//     //Filtros por actividad:
//     const runningFilter = products.filter(product => product.sport == "running");
//     const trainningFilter = products.filter(product => product.sport == "trainning");
//     const trekkingFilter = products.filter(product => product.sport == "trekking");

//     // const getMenOptions = () => {
//     //     if(adidasFilter.length > 0) {
//     //         const menAdidas = adidasFilter.filter(product => product.sex == "Hombre");
//     //         setProductsShow(menAdidas);
//     //     } else if(nikeFilter.length > 0) {
//     //         const menNike = nikeFilter.filter(product => product.sex == "Hombre");
//     //         setProductsShow(menNike);
//     //      } else if(filaFilter.length > 0) {
//     //         const menFila = filaFilter.filter(product => product.sex == "Hombre");
//     //         setProductsShow(menFila);
//     //     } else if(pumaFilter.length > 0) {
//     //         const menPuma = pumaFilter.filter(product => product.sex == "Hombre");
//     //         setProductsShow(menPuma);
//     //     } else if(runningFilter.length > 0) {
//     //         const menRunning = runningFilter.filter(product => product.sex == "Hombre");
//     //         setProductsShow(menRunning);
//     //     } else if(trainningFilter.length > 0) {
//     //         const menTrainning = trainningFilter.filter(product => product.sex == "Hombre");
//     //         setProductsShow(menTrainning);
//     //     } else if(trekkingFilter.length > 0) {
//     //         const menTrekking = trekkingFilter.filter(product => product.sex == "Hombre");
//     //         setProductsShow(menTrekking);
//     //     } else if{




//     return (
//         <div className='filter-container'>
//             <h3>Filtros:</h3>
//             <h4 onClick={() => setProductsShow([])}>Todo</h4>
//             <h4 onClick={() => setProductsShow(menFilter)}>Hombre</h4>
//             <h4 onClick={() => setProductsShow(womenFilter)}>Mujer</h4>
//             <h3>Marcas:</h3>
//             <h4 onClick={() => setProductsShow(adidasFilter)}>Adidas</h4>
//             <h4 onClick={() => setProductsShow(nikeFilter)}>Nike</h4>
//             <h4 onClick={() => setProductsShow(filaFilter)}>Fila</h4>
//             <h4 onClick={() => setProductsShow(pumaFilter)}>Puma</h4>
//             <h3>Actividades:</h3>
//             <h4 onClick={() => setProductsShow(runningFilter)}>Running</h4>
//             <h4 onClick={() => setProductsShow(trainningFilter)}>Trainning</h4>
//             <h4 onClick={() => setProductsShow(trekkingFilter)}>Trekking</h4>
//         </div>
//     );
// }

// export default Filter;

// import React, { useState } from 'react';
// import "./Filter.css";

// const Filter = ({ products, setProductsShow }) => {
//     const [filters, setFilters] = useState({
//         sex: null,
//         brand: null,
//         sport: null,
//     });

//     const applyFilters = () => {
//         let filteredProducts = products;

//         if (filters.sex) {
//             filteredProducts = filteredProducts.filter(product => product.sex === filters.sex);
//         }
//         if (filters.brand) {
//             filteredProducts = filteredProducts.filter(product => product.brand === filters.brand);
//         }
//         if (filters.sport) {
//             filteredProducts = filteredProducts.filter(product => product.sport === filters.sport);
//         }

//         setProductsShow(filteredProducts);
//         console.log(filteredProducts);
//     };

//     const handleFilterChange = (type, value) => {
//         setFilters(prevFilters => ({
//             ...prevFilters,
//             [type]: value,
//         }));
//     };

//     console.log(filters)

//     return (
//         <div className='filter-container'>
//             <h3>Filtros:</h3>
//             <h4 onClick={() => { handleFilterChange('sex', null); applyFilters(); }}>Todo</h4>
//             <h4 onClick={() => { handleFilterChange('sex', 'Hombre'); applyFilters(); }}>Hombre</h4>
//             <h4 onClick={() => { handleFilterChange('sex', 'Mujer'); applyFilters(); }}>Mujer</h4>
//             <h3>Marcas:</h3>
//             <h4 onClick={() => { handleFilterChange('brand', 'adidas'); applyFilters(); }}>Adidas</h4>
//             <h4 onClick={() => { handleFilterChange('brand', 'nike'); applyFilters(); }}>Nike</h4>
//             <h4 onClick={() => { handleFilterChange('brand', 'fila'); applyFilters(); }}>Fila</h4>
//             <h4 onClick={() => { handleFilterChange('brand', 'puma'); applyFilters(); }}>Puma</h4>
//             <h3>Actividades:</h3>
//             <h4 onClick={() => { handleFilterChange('sport', 'running'); applyFilters(); }}>Running</h4>
//             <h4 onClick={() => { handleFilterChange('sport', 'trainning'); applyFilters(); }}>Trainning</h4>
//             <h4 onClick={() => { handleFilterChange('sport', 'trekking'); applyFilters(); }}>Trekking</h4>
//         </div>
//     );
// };

// export default Filter;


import React, { useState, useEffect } from 'react';
import "./Filter.css";

const Filter = ({ products, setProductsShow }) => {
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