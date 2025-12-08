import "./ShoppingForm.css";
import axios from "axios";
import useShoppingForm from "../../../hooks/useShoppingForm";
import { useState } from "react";

let styles = {
    fontWeight: "bold",
    color: "#dc3545"
}

const ShoppingForm = ({ stateCart, goCart, userShop, totalPurchase }) => {

    let formatter = new Intl.NumberFormat('eng-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    })

    const {
        initialShoppingForm,
        shoppingForm,
        errors,
        setShoppingForm,
        setErrors,
        // handleChange,
        // handleBlur,
        validationShoppingForm
    } = useShoppingForm();


    async function handleSubmitShoppingForm(e) {
        e.preventDefault();
        try {
            if (shoppingForm === initialShoppingForm) {
                return alert("Debes llenar todos los campos requeridos !!");
            }
            if (Object.keys(errors).length !== 0) {
                alert('Debes completar correctamente todos los campos !!');
            } else {
                // Me aseguro que totalAmount y los shoppingForm.price sean una cadena antes de usar .replace
                const totalAmount_AsString = String(shoppingForm.totalAmount || ''); // Convierte a cadena 
                const price1_AsString = String(shoppingForm.price1 || ''); // Convierte a cadena 
                const price2_AsString = String(shoppingForm.price2 || ''); // Convierte a cadena 
                const price3_AsString = String(shoppingForm.price3 || ''); // Convierte a cadena 
                // Convertir totalAmount y los precios formateados a un número
                const cleanTotalAmount = parseFloat(totalAmount_AsString.replace(/[^0-9.]/g, ''));
                const cleanPrice1 = parseFloat(price1_AsString?.replace(/[^0-9.]/g, ''));
                const cleanPrice2 = price2_AsString? parseFloat(price2_AsString?.replace(/[^0-9.]/g, '')) : "";
                const cleanPrice3 = price3_AsString? parseFloat(price3_AsString?.replace(/[^0-9.]/g, '')) : "";

                if (isNaN(cleanTotalAmount)) {
                    alert("El monto total ingresado no es válido.");
                    return;
                }

                if (isNaN(cleanPrice1)) {
                    alert("El precio 1 ingresado no es válido.");
                    return;
                }
                if (isNaN(cleanPrice2)) {
                    alert("El precio 2 ingresado no es válido.");
                    return;
                }
                if (isNaN(cleanPrice3)) {
                    alert("El precio 3 ingresado no es válido.");
                    return;
                }

                // Guardar los números limpios en el formulario
                const shoppingFormToSubmit = {
                    ...shoppingForm,
                    totalAmount: cleanTotalAmount, // Asegurarte de enviar el número
                    price1: cleanPrice1, // Asegurarte de enviar el número
                    price2: cleanPrice2, // Asegurarte de enviar el número
                    price3: cleanPrice3, // Asegurarte de enviar el número
                };

                console.log(shoppingFormToSubmit);

                const response = await axios.post("http://localhost:4000/api/shopping", shoppingFormToSubmit);
                console.log(response);
                alert("La compra se realizó de manera exitosa !!");
            }
            setShoppingForm({});
            setErrors({});
            //localStorage.removeItem("cart");
            window.location.href = "/products";
        } catch (error) {
            console.log(error);
            alert(error.response.data);
            setShoppingForm(initialShoppingForm);
        }
    }

    const [position, setPosition] = useState(0);

    function changeForm(e) {
        e.preventDefault();
        if (e.target.name === "verify") {
            setPosition(0);
        } else if (e.target.name === "shipping") {
            setPosition(-33.33);
        } else if (e.target.name === "finish") {
            setPosition(-66.66);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        const userName = document.querySelector(".userName");
        const lastname = document.querySelector(".lastname");
        const totalAmount = document.querySelector(".totalAmount");
        const productName1 = document.querySelector(".productName1");
        const productName2 = document.querySelector(".productName2");
        const productName3 = document.querySelector(".productName3");
        const brand1 = document.querySelector(".brand1");
        const brand2 = document.querySelector(".brand2");
        const brand3 = document.querySelector(".brand3");
        const price1 = document.querySelector(".price1");
        const price2 = document.querySelector(".price2");
        const price3 = document.querySelector(".price3");
        const cant1 = document.querySelector(".cant1");
        const cant2 = document.querySelector(".cant2");
        const cant3 = document.querySelector(".cant3");
        const color1 = document.querySelector(".color1");
        const color2 = document.querySelector(".color2");
        const color3 = document.querySelector(".color3");
        const size1 = document.querySelector(".size1");
        const size2 = document.querySelector(".size2");
        const size3 = document.querySelector(".size3");
        setShoppingForm({
            ...shoppingForm,
            [name]: value,
            userName: userName.value,
            lastname: lastname.value,
            totalAmount: totalAmount.value,
            productName1: productName1.value,
            productName2: productName2 ? productName2.value : "",
            productName3: productName3 ? productName3.value : "",
            brand1: brand1.value,
            brand2: brand2 ? brand2.value : "",
            brand3: brand3 ? brand3.value : "",
            price1: price1.value,
            price2: price2 ? price2.value : "",
            price3: price3 ? price3.value : "",
            cant1: cant1.value,
            cant2: cant2 ? cant2.value : "",
            cant3: cant3 ? cant3.value : "",
            color1: color1.value,
            color2: color2 ? color2.value : "",
            color3: color3 ? color3.value : "",
            size1: size1.value,
            size2: size2 ? size2.value : "",
            size3: size3 ? size3.value : "",
        });
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validationShoppingForm(shoppingForm));
    }

    return (
        <div className='shoppingForm-container'>
            <form style={
                {
                    width: "300%",
                    height: "75vh",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "all 1s ease",
                    transform: `translateX(${position}%)`,
                }
            }>
                {/* ---------- VERIFICA TUS PRODUCTOS ------------- */}
                <section className="check-shipping-ends-container">
                    <section className="check-shipping-ends-inputs-button">
                        <h2>Verifica tus Productos:</h2>
                        <section className="check-shipping-ends-inputs">
                            <div className="check-shipping-ends-label-inputs">
                                <div>
                                    <label htmlFor="">Nombre del Producto</label>
                                    <input
                                        className="input productName1"
                                        name='productName'
                                        type='text'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={stateCart.length !== 0 ? stateCart[0].name : ""}
                                    />
                                    {errors.productName && <p style={styles}>{errors.productName}</p>}
                                </div>
                                <div>
                                    <label htmlFor="">Marca</label>
                                    <input
                                        className="input brand1"
                                        name='brand'
                                        type='text'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={stateCart.length !== 0 ? stateCart[0].brand : ""}
                                    />
                                    {errors.productName && <p style={styles}>{errors.productName}</p>}
                                </div>
                                <div>
                                    <label htmlFor="">Precio</label>
                                    <input
                                        className="input price1"
                                        name='price'
                                        type='text'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={stateCart.length !== 0 ? formatter.format(stateCart[0].price) : ""}
                                    />
                                    {errors.price && <p style={styles}>{errors.price}</p>}
                                </div>
                                <div>
                                    <label htmlFor="">Cantidad</label>
                                    <input
                                        className="input cant1"
                                        name='cant'
                                        type='number'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={stateCart.length !== 0 ? stateCart[0].quantity : ""}
                                    />
                                    {errors.cant && <p style={styles}>{errors.cant}</p>}
                                </div>
                                <div>
                                    <label htmlFor="">Color</label>
                                    <input
                                        className="input color1"
                                        name='color'
                                        type='text'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={stateCart.length !== 0 ? stateCart[0].color : ""}
                                    />
                                    {errors.color && <p style={styles}>{errors.color}</p>}
                                </div>
                                <div>
                                    <label htmlFor="">Talle</label>
                                    <input
                                        className="input size1"
                                        name='size'
                                        type='text'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={stateCart.length !== 0 ? stateCart[0].size : ""}
                                    />
                                    {errors.size && <p style={styles}>{errors.size}</p>}
                                </div>
                            </div>

                            {
                                stateCart[1] &&
                                <div className="check-shipping-ends-label-inputs">
                                    <div>
                                        <label htmlFor="">Nombre del Producto</label>
                                        <input
                                            className="input productName2"
                                            name='productName'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={stateCart[1].name}
                                        />
                                        {errors.productName && <p style={styles}>{errors.productName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="">Marca</label>
                                        <input
                                            className="input brand2"
                                            name='brand'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={stateCart[1].brand}
                                        />
                                        {errors.productName && <p style={styles}>{errors.productName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="">Precio</label>
                                        <input
                                            className="input price2"
                                            name='price'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={formatter.format(stateCart[1].price)}
                                        />
                                        {errors.price && <p style={styles}>{errors.price}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="">Cantidad</label>
                                        <input
                                            className="input cant2"
                                            name='cant'
                                            type='number'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={stateCart[1].quantity}
                                        />
                                        {errors.cant && <p style={styles}>{errors.cant}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="">Color</label>
                                        <input
                                            className="input color2"
                                            name='color'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={stateCart[1].color}
                                        />
                                        {errors.color && <p style={styles}>{errors.color}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="">Talle</label>
                                        <input
                                            className="input size2"
                                            name='size'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={stateCart[1].size}
                                        />
                                        {errors.size && <p style={styles}>{errors.size}</p>}
                                    </div>

                                </div>
                            }

                            {stateCart[2] &&
                                <div className="check-shipping-ends-label-inputs">
                                    <div>
                                        <label htmlFor="">Nombre del Producto</label>
                                        <input
                                            className="input productName3"
                                            name='productName'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={stateCart[2].name}
                                        />
                                        {errors.productName && <p style={styles}>{errors.productName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="">Marca</label>
                                        <input
                                            className="input brand3"
                                            name='brand'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={stateCart[2].brand}
                                        />
                                        {errors.productName && <p style={styles}>{errors.productName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="">Precio</label>
                                        <input
                                            className="input price3"
                                            name='price'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={formatter.format(stateCart[2].price)}
                                        />
                                        {errors.price && <p style={styles}>{errors.price}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="">Cantidad</label>
                                        <input
                                            className="input cant3"
                                            name='cant'
                                            type='number'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={stateCart[2].quantity}
                                        />
                                        {errors.cant && <p style={styles}>{errors.cant}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="">Color</label>
                                        <input
                                            className="input color3"
                                            name='color'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={stateCart[2].color}
                                        />
                                        {errors.color && <p style={styles}>{errors.color}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="">Talle</label>
                                        <input
                                            className="input size3"
                                            name='size'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={stateCart[2].size}
                                        />
                                        {errors.size && <p style={styles}>{errors.size}</p>}
                                    </div>
                                </div>
                            }
                        </section>
                        <section className="check-shipping-ends-button">
                            <button className="button-shopping" onClick={goCart}>Volver</button>
                            <button className="button-shopping" onClick={changeForm} name="shipping">Siguiente</button>
                        </section>
                    </section>
                </section>

                {/* ---------- COMPLETA TUS DATOS DE ENVIO ------------- */}

                <section className="check-shipping-ends-container">
                    <section className="check-shipping-ends-inputs-button">
                        <h2>Completa tus Datos de Envio:</h2>
                        <section className="check-shipping-ends-inputs">
                            <div>
                                <label htmlFor="">Provincia</label>
                                <input
                                    className="input"
                                    name='province'
                                    type='text'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={shoppingForm.province}
                                />
                                {errors.province && <p style={styles}>{errors.province}</p>}
                            </div>
                            <div>
                                <label htmlFor="">Localidad</label>
                                <input
                                    className="input"
                                    name='city'
                                    type='text'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={shoppingForm.city}
                                />
                                {errors.city && <p style={styles}>{errors.city}</p>}
                            </div>
                            <div>
                                <label htmlFor="">Calle</label>
                                <input
                                    className="input"
                                    name='street'
                                    type='text'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={shoppingForm.street}
                                />
                                {errors.street && <p style={styles}>{errors.street}</p>}
                            </div>
                            <div>
                                <label htmlFor="">Numero</label>
                                <input
                                    className="input"
                                    name='numberStreet'
                                    type='number'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={shoppingForm.numberStreet}
                                />
                                {errors.numberStreet && <p style={styles}>{errors.numberStreet}</p>}
                            </div>
                        </section>

                        <section className="check-shipping-ends-button">
                            <button className="button-shopping" name="verify" onClick={changeForm}>Volver</button>
                            <button className="button-shopping" name="finish" onClick={changeForm}>Siguiente</button>
                        </section>
                    </section>
                </section>


                {/* ---------- Finaliza Tu Compra ------------- */}

                <section className="check-shipping-ends-container">
                    <section className="check-shipping-ends-inputs-button">
                        <h2>Finaliza tu Compra:</h2>
                        <section className="check-shipping-ends-inputs">
                            <div>
                                <label htmlFor="">Nombre</label>
                                <input
                                    className="input userName"
                                    name='userName'
                                    type='text'
                                    onChange={handleChange}
                                    // onBlur={handleBlur}
                                    value={userShop?.name || ""}
                                />
                                {errors.userName && <p style={styles}>{errors.userName}</p>}
                            </div>
                            <div>
                                <label htmlFor="">Apellido</label>
                                <input
                                    className="input lastname"
                                    name='lastname'
                                    type='text'
                                    onChange={handleChange}
                                    // onBlur={handleBlur}
                                    value={userShop?.lastname || ""}
                                />
                                {errors.lastname && <p style={styles}>{errors.lastname}</p>}
                            </div>
                            <div>
                                <label htmlFor="">DNI</label>
                                <input
                                    className="input"
                                    name='dni'
                                    type='number'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={shoppingForm.dni}
                                />
                                {errors.dni && <p style={styles}>{errors.dni}</p>}
                            </div>
                            <div>
                                <label htmlFor="">Monto Total</label>
                                <input
                                    className="input totalAmount"
                                    name='totalAmount'
                                    type='text'
                                    onChange={handleChange}
                                    // onBlur={handleBlur}
                                    value={formatter.format(totalPurchase)}
                                />
                                {errors.totalAmount && <p style={styles}>{errors.totalAmount}</p>}
                            </div>
                            <div>
                                <label htmlFor="">Tarjeta (Visa, etc)</label>
                                <input
                                    className="input"
                                    name='card'
                                    type='text'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={shoppingForm.card}
                                />
                                {errors.card && <p style={styles}>{errors.card}</p>}
                            </div>
                            <div>
                                <label htmlFor="">Banco (Macro, etc)</label>
                                <input
                                    className="input"
                                    name='bank'
                                    type='text'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={shoppingForm.bank}
                                />
                                {errors.bank && <p style={styles}>{errors.bank}</p>}
                            </div>
                            <div>
                                <label htmlFor="">Numero de Tarjeta</label>
                                <input
                                    className="input"
                                    name='numberOfCard'
                                    type='number'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={shoppingForm.numberOfCard}
                                />
                                {errors.numberOfCard && <p style={styles}>{errors.numberOfCard}</p>}
                            </div>

                        </section>
                        <section className="check-shipping-ends-button">
                            <button className="button-shopping" name="shipping" onClick={changeForm}>Volver</button>
                            <button className="button-shopping" onClick={handleSubmitShoppingForm}>Comprar</button>
                        </section>
                    </section>
                </section>
            </form>
        </div>
    )
}

export default ShoppingForm;