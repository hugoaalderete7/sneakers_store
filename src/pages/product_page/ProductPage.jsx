import React, { useState } from 'react';
import "./ProductPage.css";
import { useSelector } from 'react-redux';
import CartForm from '../../components/form/cart_form/CartForm';
import No_Transp_Navbar from '../../components/navbar/No_Transp_Navbar';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
    const product = useSelector((state) => state.products.product);
    console.log("Producto en ProductPage:", product);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    return (
        <div className='product-page-grid-container'>
            <section>
                <No_Transp_Navbar user={user} setUser={setUser} />
            </section>
            <section className='product-form-container'>
                {product ? (
                    <section className="image-name-price-container">
                        <div className='image-container'>
                            <img className="product-image" src={product.image} alt={product.name} />
                        </div>
                        <div className='name-price-container'>
                            <h3 className="product-name">{product.name}</h3>
                            <h3 className="product-price">${product.price}</h3>
                        </div>
                        <div className='go-container'>
                            <h4 className='go-products-page' onClick={()=> navigate('/products')}>Volver</h4>
                        </div>
                    </section>
                ) : (
                    <h2>No hay productos seleccionados</h2>
                )}

                <section className='form-container'>
                    <CartForm />
                </section>
            </section>
        </div>
    );
}

export default ProductPage;
