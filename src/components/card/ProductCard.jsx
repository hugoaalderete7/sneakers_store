import React from 'react';
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import { readProduct } from '../../store/slices/products/productsThunks';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ el }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
    })

    const handleReadProduct = (el) => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Si estás registrado, inicia sesión. Sino, regístrate y luego inicia sesión para ver los detalles del producto.");
            navigate("/login");
            return;
        }
        dispatch(readProduct(el));
        navigate("/product");
    }

    return (
        <div >
            <img className='image-card' src={el.image} />
            <section className='price-button-container'>
                <h3 className='price-card'>{formatter.format(el.price)}</h3>
                <button className='button-card' onClick={() => handleReadProduct(el)}>Ver Mas</button>
            </section>
        </div>
    );
}

export default ProductCard;
