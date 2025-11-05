import React from 'react';
import "./Searcher.css"


const Searcher = ({ elements, setFiltered, busqueda, setBusqueda, products }) => {

    const handleChange = e => {
        setBusqueda(e.target.value)
        elements == products ? filtrarProducts(e.target.value) : filtrarUsers(e.target.value)
    }

    const filtrarProducts = (terminoBusqueda) => {
        var response = elements.filter((elemento) => {
            if (elemento.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.brand.toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.sex.toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.sport.toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento;
            }
        });
        setFiltered(response);
    }

    const filtrarUsers = (terminoBusqueda) => {
        var response = elements.filter((elemento) => {
            if (elemento.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.lastname.toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.email.toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento;
            }
        });
        setFiltered(response);
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