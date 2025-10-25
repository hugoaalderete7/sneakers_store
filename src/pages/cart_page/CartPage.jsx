import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    console.log(cart.cart);
    console.log(cart.quantity)
    
    return (
        <div>
            {cart.cart.map((product)=> (
                <ul>
                    <li key={product.index}>{product.name} - {product.price} - {product.quantity}</li>
                </ul>
            ) 
            )}
        </div>
    );
}

export default CartPage;
