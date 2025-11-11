import React from 'react';
import UseForm from '../../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProductCart } from '../../../store/slices/cart/cartSlice';

const CartForm = () => {
    const product = useSelector((state) => state.products.product);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { initialForm, initialErrors, form, errors, setForm, setErrors, handleChange, handleBlurCart, handleChecked, handleChangeCart } = UseForm();
    console.log("Producto en CartForm:", form);


    const styles = {
        fontWeight: "bold",
        color: "#ff0000",
    };

    const handleSubmitCart = (e) => {
        e.preventDefault();
        dispatch(createProductCart(form));
        setForm(initialForm);
        setErrors(initialErrors);
    }


    return (
        <div>
            <h2 className='products-h2'>Debes seleccionar Talle, Color y Cantidad:</h2>

            <form className='products-form-container'>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="name">Nombre:</label>
                    <input
                        id='name'
                        className="products-input-first"
                        name='name'
                        type='text'
                        //placeholder='Nombre del Producto'
                        onChange={handleChangeCart}
                        //onBlur={handleBlurCart}
                        value={product.name || ""}
                    />

                    {/* {errors.name && <p style={styles}>{errors.name}</p>} */}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="sex">Sexo:</label>
                    <select
                    id='sex'
                        className='products-select'
                        name='sex'
                        onChange={handleChangeCart}
                        //onBlur={handleBlurCart}
                        value={product.sex || ''}
                    >
                        <option value="">---</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                    </select>

                    {/* {errors.sex && <p style={styles}>{errors.sex}</p>} */}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="brand">Marca:</label>
                    <select
                    id='brand'
                        className='products-select'
                        name='brand'
                        onChange={handleChangeCart}
                        //onBlur={handleBlurCart}
                        value={product.brand || ''}
                    >
                        <option value="">---</option>
                        <option value="adidas">Adidas</option>
                        <option value="nike">Nike</option>
                        <option value="fila">Fila</option>
                        <option value="puma">Puma</option>
                    </select>

                    {/* {errors.brand && <p style={styles}>{errors.brand}</p>} */}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="sport">Disciplina:</label>
                    <select
                    id='sport'
                        className='products-select'
                        name='sport'
                        onChange={handleChangeCart}
                        //onBlur={handleBlurCart}
                        value={product.sport || ''}
                    >
                        <option value="">---</option>
                        <option value="running">Running</option>
                        <option value="trekking">Trekking</option>
                        <option value="trainning">Trainning</option>
                    </select>

                    {/* {errors.sport && <p style={styles}>{errors.sport}</p>} */}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="size">Talle:</label>
                    <select
                        className='products-select'
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

                <section className='products-section-grid-item'>
                    <label className="products-label" for="color">Color:</label>
                    <select
                        className='products-select'
                        name='color'
                        onChange={handleChangeCart}
                        onBlur={handleBlurCart}
                        value={form.color || ''}
                    >
                        <option value="">---</option>
                        <option value="blanco">Blanco</option>
                        <option value="negro">Negro</option>
                        <option value="gris">Gris</option>
                        <option value="azul">Azul</option>
                        <option value="verde">Verde</option>
                        <option value="rojo">Rojo</option>
                        <option value="natural">Natural</option>
                        <option value="combinado">Combinado</option>
                    </select>

                    {errors.color && <p style={styles}>{errors.color}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="cantIngr">Cantidad:</label>
                    <input
                        className="products-input"
                        name='quantity'
                        type='number'
                        placeholder='Cantidad'
                        onChange={handleChangeCart}
                        onBlur={handleBlurCart}
                        value={form.quantity || ''}
                    />

                    {errors.quantity && <p style={styles}>{errors.quantity}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="price">Precio:</label>
                    <input
                    id='price'
                        className="products-input"
                        name='price'
                        type='number'
                        //placeholder='Precio'
                        onChange={handleChangeCart}
                        //onBlur={handleBlurCart}
                        value={product.price || ''}
                    />

                    {/* {errors.price && <p style={styles}>{errors.price}</p>} */}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="image">Imagen:</label>
                    <input
                    id='image'
                        className="products-input"
                        name='image'
                        type='text'
                        //placeholder='Imagen del Producto'
                        onChange={handleChangeCart}
                        //onBlur={handleBlurCart}
                        value={product.image || ''}
                    />

                    {/* {errors.image && <p style={styles}>{errors.image}</p>} */}
                </section>

                {/* <section className='products-check-label-input  products-section-grid-item'>
                    <label className="products-check-label" for="myCheckbox">Publicar</label>
                    <input
                        className="products-check-input"
                        name='published'
                        id='myCheckbox'
                        type='checkbox'
                        onChange={handleChecked}
                        value={form.published || false}
                        onBlur={handleBlurCart}
                    />
                </section> */}

                <section className='products-section-grid-item'>
                    <button type= "button" className="products-form-button" onClick={handleSubmitCart}>Agregar al Carrito</button>
                </section>

            </form>
        </div>
    );
}

export default CartForm;
