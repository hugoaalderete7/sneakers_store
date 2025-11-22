import React, { useEffect, useState } from 'react';
import "./ProductPage.css";
import { useSelector } from 'react-redux';
import CartForm from '../../components/form/cart_form/CartForm';
import No_Transp_Navbar from '../../components/navbar/No_Transp_Navbar';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
    const product = useSelector((state) => state.products.product);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const initialSizes = {
        36: 0,
        37: 0,
        38: 0,
        39: 0,
        40: 0,
        41: 0,
        42: 0
    };

    const [sizes, setSizes] = useState(initialSizes);

    useEffect(() => {
        if (product && product.stock) {
            setSizes(product.stock);
        }
    }, [product]);

    return (
        <div className='product-page-grid-container'>
            <section>
                <No_Transp_Navbar user={user} setUser={setUser} />
            </section>
            <section className='product-form-container'>
                {Object.keys(product).length === 0 ? (
                    <section>
                        <h2>No hay productos seleccionados</h2>
                        <div className='go-container'>
                            <h4 className='go-products-page' onClick={() => navigate('/products')}>Volver</h4>
                        </div>
                    </section>

                ) : (
                    <section className="image-name-price-size-container">
                        <div className='image-container'>
                            <img className="product-image" src={product.image} alt={product.name} />
                        </div>
                        <div className='name-price-container'>
                            <h3 className="product-name">{product.name}</h3>
                            <h3 className="product-price">${product.price}</h3>
                        </div>
                        <div className='sizes-container'>
                            <section className='title-container'>
                                <h3>Disponibles:</h3>
                            </section>
                            <section className='sizes-grid-container'>
                                <h4>Talle</h4>
                                <h4>36</h4>
                                <h4>37</h4>
                                <h4>38</h4>
                                <h4>39</h4>
                                <h4>40</h4>
                                <h4>41</h4>
                                <h4>42</h4>
                                <h4>Stock</h4>
                                <h4>{sizes[36] == 0 ? "-" : sizes[36]}</h4>
                                <h4>{sizes[37] == 0 ? "-" : sizes[37]}</h4>
                                <h4>{sizes[38] == 0 ? "-" : sizes[38]}</h4>
                                <h4>{sizes[39] == 0 ? "-" : sizes[39]}</h4>
                                <h4>{sizes[40] == 0 ? "-" : sizes[40]}</h4>
                                <h4>{sizes[41] == 0 ? "-" : sizes[41]}</h4>
                                <h4>{sizes[42] == 0 ? "-" : sizes[42]}</h4>
                            </section>
                        </div>
                        <div className='go-container'>
                            <h4 className='go-products-page' onClick={() => navigate('/products')}>Volver</h4>
                        </div>
                    </section>
                )}

                <section className='form-container'>
                    <CartForm sizes={sizes} />
                </section>
            </section>
        </div>
    );
}

export default ProductPage;
