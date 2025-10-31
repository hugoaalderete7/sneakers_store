import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import No_Transp_Navbar from '../../components/navbar/No_Transp_Navbar';
import "./CartPage.css";

const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    console.log(cart.cart);
    console.log(cart.quantity)

    return (
        <div>
            <article className='cart-container'>
                <section className='navbar-container'>
                    <No_Transp_Navbar />
                </section>
                <section className='products-cart-container'>
                    <section className='total-cart'>
                        <h3 style={{textDecoration: 'underline'}}>DETALLE DE TU SELECCIÓN:</h3>
                        <h3>Total: $100000</h3>
                        <h3>Comprar</h3>
                        <h3>Vaciar el carrito</h3>
                        <h3>Volver</h3>
                    </section>
                    <section style={{marginTop: '70px', width:'100%'}}>
                        {cart.cart.map((product) => (
                            <section className='li-container'>
                                <img src={product.image} style={{ width: '6vw' }} />
                                <section><h4>Nombre</h4>{product.name}</section>
                                <section><h4>Color</h4>{product.color}</section>
                                <section><h4>Talle</h4>{product.size}</section>
                                <section><h4>Precio</h4>{product.price}</section>
                                <section><h4>Cantidad</h4>{product.quantity}</section>
                                <section><h4>Parcial</h4>{product.quantity * product.price}</section>
                                <button>Eliminar uno</button>
                                <button>Eliminar todos</button>
                            </section>
                        )
                        )}
                    </section>
                </section>
            </article>
        </div>
    );
}

export default CartPage;
