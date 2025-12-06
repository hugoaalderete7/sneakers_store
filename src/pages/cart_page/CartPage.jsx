import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import No_Transp_Navbar from '../../components/navbar/No_Transp_Navbar';
import "./CartPage.css";
import { deleteAllCart, deleteOne, deleteOneAll } from '../../store/slices/cart/cartSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import ShoppingForm from '../../components/form/shopping_form/ShoppingForm';

const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const flag = cart.cart.length === 0 ? true : false;
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [userShop, setUserShop] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const parseUser = token ? JSON.parse(token).usuario : null;
        setUserShop(parseUser);
    }, []);

    console.log(cart.cart);
    console.log(cart.quantity)
    console.log(userShop?.name);

    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
    })

    const totalPurchase = cart.cart.reduce((total, product) => total + (product.price * product.quantity), 0);

    const goProductPage = () => {
        navigate("/product");
    }

    const goCart = () => {
        navigate("/cart");
    }

    return (
        <div>
            <article className='cart-container'>
                <section className='navbar-container'>
                    <No_Transp_Navbar user={user} setUser={setUser} />
                </section>
                <section className='products-cart-container'>
                    <section className='total-cart'>
                        <h3 style={{ textDecoration: 'underline' }}>DETALLE DE TU SELECCIÓN:</h3>
                        <h3>Total: {formatter.format(totalPurchase)}</h3>
                        <h3 style={{ cursor: 'pointer', textDecoration: 'underline' }}>Comprar</h3>
                        <h3 onClick={() => dispatch(deleteAllCart())} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Vaciar el carrito</h3>
                        <h3 onClick={() => goProductPage()} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Volver</h3>
                    </section>
                    <section style={{ marginTop: '70px', width: '100%' }}>
                        {cart.cart.map((product) => (
                            <section className='li-container'>
                                <img src={product.image} style={{ width: '6vw' }} />
                                <section><h4>Nombre</h4>{product.name}</section>
                                <section><h4>Color</h4>{product.color}</section>
                                <section><h4>Talle</h4>{product.size}</section>
                                <section><h4>Precio</h4>{product.price}</section>
                                <section><h4>Cantidad</h4>{product.quantity}</section>
                                <section><h4>Parcial</h4>{product.quantity * product.price}</section>
                                <button onClick={() => dispatch(deleteOne(product._id))}>Eliminar uno</button>
                                <button onClick={() => dispatch(deleteOneAll(product._id))}>Eliminar todos</button>
                            </section>
                        )
                        )}
                    </section>
                    <section>
                        {flag == false &&
                            <article>
                                <ShoppingForm stateCart={cart.cart} goCart={goCart} totalPurchase={totalPurchase} userShop={userShop} />
                            </article>
                        }
                    </section>
                </section>
            </article>
        </div>
    );
}

export default CartPage;
