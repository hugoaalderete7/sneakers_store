import React, { useEffect } from 'react';
import UseForm from '../../hooks/useForm';
import "./ProductsForm.css";
import { useDispatch } from 'react-redux';
import { createProduct } from '../../store/slices/products/productsThunks';


let styles = {
    fontWeight: "bold",
    color: "#dc3545"
}

const RegisterForm = () => {
    const { initialForm, initialErrors, form, errors, setForm, setErrors, handleChange, handleBlurRegister } = UseForm();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (dataToEdit) {
    //         setForm(dataToEdit)
    //     } else {
    //         setForm(initialForm)
    //     }
    // }, [dataToEdit])


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (JSON.stringify(form) === JSON.stringify(initialForm)) {
                return alert("El formulario está vacío, debes llenar todos los campos requeridos !!");
            }

            // if (!form._id) {
            if (JSON.stringify(errors) === JSON.stringify(initialErrors)) {
                dispatch(createProduct(form));
                alert("Producto creado con éxito !!");
                setForm(initialForm);
                setErrors(initialErrors);
            }
            else {
                alert('Debes completar correctamente todos los campos !!');
            }
            // } else {
            //     UpDateUsers(form);
            // }
        } catch (error) {
            console.log(error);
            setForm(initialForm);
        }
    }

    return (
        <div className='products-total-form-container'>

            <h2 className='products-h2'>Ingresar Producto:</h2>

            <form className='products-form-container'>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="name">Nombre:</label>
                    <input
                        className="products-input-first"
                        name='name'
                        type='text'
                        placeholder='Nombre del Producto'
                        onChange={handleChangeProducts}
                        // onBlur={handleBlurProducts}
                        value={formProducts.name}
                    />

                    {errorsProducts.name && <p style={styles}>{errorsProducts.name}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="sex">Sexo:</label>
                    <select
                        className='products-select'
                        name='sex'
                        onChange={handleChangeProducts}
                        // onBlur={handleBlurProducts}
                        value={formProducts.sex}
                    >
                        <option value="">---</option>
                        <option value="men">Hombre</option>
                        <option value="women">Mujer</option>
                    </select>

                    {errorsProducts.sex && <p style={styles}>{errorsProducts.sex}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="brand">Marca:</label>
                    <select
                        className='products-select'
                        name='brand'
                        onChange={handleChangeProducts}
                        // onBlur={handleBlurProducts}
                        value={formProducts.brand}
                    >
                        <option value="">---</option>
                        <option value="adidas">Adidas</option>
                        <option value="nike">Nike</option>
                        <option value="fila">Fila</option>
                        <option value="puma">Puma</option>
                    </select>

                    {errorsProducts.brand && <p style={styles}>{errorsProducts.brand}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="sport">Disciplina:</label>
                    <select
                        className='products-select'
                        name='sport'
                        onChange={handleChangeProducts}
                        // onBlur={handleBlurProducts}
                        value={formProducts.sport}
                    >
                        <option value="">---</option>
                        <option value="running">Running</option>
                        <option value="trekking">Trekking</option>
                        <option value="trainning">Trainning</option>
                    </select>

                    {errorsProducts.sport && <p style={styles}>{errorsProducts.sport}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="size">Talle:</label>
                    <select
                        className='products-select'
                        name='size'
                        onChange={handleChangeProducts}
                        // onBlur={handleBlurProducts}
                        value={formProducts.size}
                    >
                        <option value="">---</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                    </select>

                    {errorsProducts.size && <p style={styles}>{errorsProducts.size}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="color">Color:</label>
                    <select
                        className='products-select'
                        name='color'
                        onChange={handleChangeProducts}
                        // onBlur={handleBlurProducts}
                        value={formProducts.color}
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

                    {errorsProducts.color && <p style={styles}>{errorsProducts.color}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="cantIngr">Cantidad:</label>
                    <input
                        className="products-input"
                        name='cantIngr'
                        type='number'
                        placeholder='Cantidad'
                        onChange={handleChangeProducts}
                        // onBlur={handleBlurProducts}
                        value={formProducts.cantIngr}
                    />

                    {errorsProducts.cantIngr && <p style={styles}>{errorsProducts.cantIngr}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="price">Precio:</label>
                    <input
                        className="products-input"
                        name='price'
                        type='number'
                        placeholder='Precio'
                        onChange={handleChangeProducts}
                        // onBlur={handleBlurProducts}
                        value={formProducts.price}
                    />

                    {errorsProducts.price && <p style={styles}>{errorsProducts.price}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="image">Imagen:</label>
                    <input
                        className="products-input"
                        name='image'
                        type='text'
                        placeholder='Imagen del Producto'
                        onChange={handleChangeProducts}
                        // onBlur={handleBlurProducts}
                        value={formProducts.image}
                    />

                    {errorsProducts.image && <p style={styles}>{errorsProducts.image}</p>}
                </section>

                <section className='products-check-label-input  products-section-grid-item'>
                    <label className="products-check-label" for="myCheckbox">Publicar</label>
                    <input
                        className="products-check-input"
                        name='published'
                        id='myCheckbox'
                        type='checkbox'
                        onChange={handleChecked}
                        value={formProducts.published}
                    // onBlur={handleBlurProducts}
                    />
                </section>

                <section className='products-section-grid-item'>
                    <button className="products-form-button" onClick={handleSubmitProducts}>Ingresar</button>
                </section>

            </form>
        </div>
    );
}

export default RegisterForm;