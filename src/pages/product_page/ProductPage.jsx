import React from 'react';
import "./ProductPage.css";
import { useSelector } from 'react-redux';
import CartForm from '../../components/form/CartForm';

const ProductPage = () => {
    const product = useSelector((state) => state.products.product);
    console.log("Producto en ProductPage:", product);

    return (
        <div>
            <section>
                {product ? (
                    <div className="product-page">
                        <img className="product-image" src={product.image} alt={product.name} />
                        <h3 className="product-name">{product.name}</h3>
                        <h3 className="product-price">${product.price}</h3>
                    </div>
                ) : (
                    <h2>No product selected</h2>
                )}
            </section>
            <section>
                <CartForm />
            </section>


        </div>
    );
}

export default ProductPage;
