import React, { useEffect } from 'react';
import UseForm from '../../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProductCart } from '../../../store/slices/cart/cartSlice';
import './CartForm.css';

const CartForm = ({ sizes }) => {
    const product = useSelector((state) => state.products.product);
    const dispatch = useDispatch();
    const { initialForm, initialErrors, form, errors, setForm, setErrors, handleBlurCart, handleChangeCart } = UseForm();

    const styles = {
        fontWeight: "bold",
        color: "#ff0000",
    };

    useEffect(() => {
        setForm({
            ...product,
            size: form.size || '',
            quantity: form.quantity
        });
    }, [form.size, form.quantity]);

    const handleSubmitCart = (e) => {
        e.preventDefault();
        if (!form.size) {
            alert("Debes seleccionar un Talle.");
            return;
        }
        if (!form.quantity || form.quantity <= 0) {
            alert("Debes ingresar una Cantidad válida.");
            return;
        }
        if (form.quantity > sizes[form.size]) {
            alert("La cantidad ingresada supera el stock disponible para el talle seleccionado.");
            return;
        }
        dispatch(createProductCart(form));
        setForm(initialForm);
        setErrors(initialErrors);
    }


    return (
        <div>
            <h2 className='products-cart-h2'>Debes seleccionar Talle (ver en "Disponibles") y Cantidad:</h2>
            <form className='products-cart-form-container'>
                <section className='products-cart-section-grid-item'>
                    <label className="products-label" for="name">Nombre:</label>
                    <input
                        id='name'
                        className="products-cart-input-first"
                        name='name'
                        type='text'
                        value={form.name || ""}
                    />
                </section>
                <section className='products-cart-section-grid-item'>
                    <label className="products-cart-label" for="sex">Sexo:</label>
                    <input
                        id='sex'
                        className='products-cart-select'
                        name='sex'
                        type='text'
                        value={form.sex || ''}
                    />
                </section>
                <section className='products-cart-section-grid-item'>
                    <label className="products-cart-label" for="brand">Marca:</label>
                    <input
                        id='brand'
                        className='products-cart-select'
                        name='brand'
                        type='text'
                        value={form.brand || ''}
                    />
                </section>
                <section className='products-cart-section-grid-item'>
                    <label className="products-cart-label" for="sport">Disciplina:</label>
                    <input
                        id='sport'
                        className='products-cart-select'
                        name='sport'
                        type='text'
                        value={form.sport || ''}
                    />
                </section>
                <section className='products-cart-section-grid-item'>
                    <label className="products-cart-label" for="size">Talle:</label>
                    <select
                        className='products-cart-select'
                        name='size'
                        onChange={handleChangeCart}
                        onBlur={handleBlurCart}
                        value={form.size || ''}
                    >
                        <option value="">---</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                    </select>
                    {errors.size && <p style={styles}>{errors.size}</p>}
                </section>
                <section className='products-cart-section-grid-item'>
                    <label className="products-cart-label" for="cantIngr">Cantidad:</label>
                    <input
                        className="products-cart-input"
                        name='quantity'
                        type='number'
                        placeholder='Cantidad'
                        onChange={handleChangeCart}
                        onBlur={handleBlurCart}
                        value={form.quantity || ''}
                    />
                    {errors.quantity && <p style={styles}>{errors.quantity}</p>}
                </section>
                <section className='products-cart-section-grid-item'>
                    <label className="products-cart-label" for="color">Color:</label>
                    <input
                        id='color'
                        className='products-cart-select'
                        name='color'
                        type='text'
                        value={form.color || ''}
                    />
                </section>
                <section className='products-cart-section-grid-item'>
                    <label className="products-cart-label" for="price">Precio:</label>
                    <input
                        id='price'
                        className="products-cart-input"
                        name='price'
                        type='number'
                        value={form.price || ''}
                    />
                </section>
                <section className='products-cart-section-grid-item'>
                    <label className="products-cart-label" for="image">Imagen:</label>
                    <input
                        id='image'
                        className="products-cart-input"
                        name='image'
                        type='text'
                        value={form.image || ''}
                    />
                </section>
                <section className='products-cart-section-grid-item-button'>
                    <button type="button" className="products-cart-form-button" onClick={handleSubmitCart}>Agregar al Carrito</button>
                </section>
            </form>
        </div>
    );
}

export default CartForm;
