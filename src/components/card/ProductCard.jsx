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
        dispatch(readProduct(el));
        navigate("/product");
    }


    return (
        <div>
            <article className='product-card'>
                <img className='image-card' src={el.image} />
                <h3 className='price-card'>{formatter.format(el.price)}</h3>
                <button className='button-card' onClick={() => handleReadProduct(el)}>Ver Mas</button>
            </article>
        </div>
    );
}

export default ProductCard;
