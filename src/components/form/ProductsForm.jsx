import React, { useEffect } from 'react';
import UseForm from '../../hooks/useForm';
import "./ProductsForm.css";
import { useDispatch } from 'react-redux';
import { createProduct } from '../../store/slices/products/productsThunks';


let styles = {
    fontWeight: "bold",
    color: "#dc3545"
}

const ProductsForm = () => {
    const { initialForm, initialErrors, form, errors, setForm, setErrors, handleChange, handleChecked, handleBlurProducts } = UseForm();
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
                        onChange={handleChange}
                        onBlur={handleBlurProducts}
                        value={form.name || ""}
                    />

                    {errors.name && <p style={styles}>{errors.name}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="sex">Sexo:</label>
                    <select
                        className='products-select'
                        name='sex'
                        onChange={handleChange}
                        onBlur={handleBlurProducts}
                        value={form.sex || ''}
                    >
                        <option value="">---</option>
                        <option value="men">Hombre</option>
                        <option value="women">Mujer</option>
                    </select>

                    {errors.sex && <p style={styles}>{errors.sex}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="brand">Marca:</label>
                    <select
                        className='products-select'
                        name='brand'
                        onChange={handleChange}
                        onBlur={handleBlurProducts}
                        value={form.brand || ''}
                    >
                        <option value="">---</option>
                        <option value="adidas">Adidas</option>
                        <option value="nike">Nike</option>
                        <option value="fila">Fila</option>
                        <option value="puma">Puma</option>
                    </select>

                    {errors.brand && <p style={styles}>{errors.brand}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="sport">Disciplina:</label>
                    <select
                        className='products-select'
                        name='sport'
                        onChange={handleChange}
                        onBlur={handleBlurProducts}
                        value={form.sport || ''}
                    >
                        <option value="">---</option>
                        <option value="running">Running</option>
                        <option value="trekking">Trekking</option>
                        <option value="trainning">Trainning</option>
                    </select>

                    {errors.sport && <p style={styles}>{errors.sport}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="size">Talle:</label>
                    <select
                        className='products-select'
                        name='size'
                        onChange={handleChange}
                        onBlur={handleBlurProducts}
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
                        onChange={handleChange}
                        onBlur={handleBlurProducts}
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
                        name='cantIngr'
                        type='number'
                        placeholder='Cantidad'
                        onChange={handleChange}
                        onBlur={handleBlurProducts}
                        value={form.cantIngr || ''}
                    />

                    {errors.cantIngr && <p style={styles}>{errors.cantIngr}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="price">Precio:</label>
                    <input
                        className="products-input"
                        name='price'
                        type='number'
                        placeholder='Precio'
                        onChange={handleChange}
                        onBlur={handleBlurProducts}
                        value={form.price || ''}
                    />

                    {errors.price && <p style={styles}>{errors.price}</p>}
                </section>

                <section className='products-section-grid-item'>
                    <label className="products-label" for="image">Imagen:</label>
                    <input
                        className="products-input"
                        name='image'
                        type='text'
                        placeholder='Imagen del Producto'
                        onChange={handleChange}
                        onBlur={handleBlurProducts}
                        value={form.image || ''}
                    />

                    {errors.image && <p style={styles}>{errors.image}</p>}
                </section>

                <section className='products-check-label-input  products-section-grid-item'>
                    <label className="products-check-label" for="myCheckbox">Publicar</label>
                    <input
                        className="products-check-input"
                        name='published'
                        id='myCheckbox'
                        type='checkbox'
                        onChange={handleChecked}
                        value={form.published || false}
                        onBlur={handleBlurProducts}
                    />
                </section>

                <section className='products-section-grid-item'>
                    <button className="products-form-button" onClick={handleSubmit}>Ingresar</button>
                </section>

            </form>
        </div>
    );
}

export default ProductsForm;