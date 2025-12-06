import { useState } from 'react';


const useShoppingForm = () => {


    const initialShoppingForm = {
        userName: "",
        lastname: "",
        dni: "",
        province: "",
        city: "",
        street: "",
        numberStreet: "",
        card: "",
        bank: "",
        numberOfCard: "",
        totalAmount: "",
        // productName1: "",
        // price: "",
        // cant: "",
        // color: "",
        // size: ""
    }


    const [shoppingForm, setShoppingForm] = useState(initialShoppingForm);
    const [errors, setErrors] = useState({});


    const validationShoppingForm = (shoppingForm) => {

        let errors = {};

        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexComments = /^.{1,20}$/;
        let regexComments1 = /^.{7,8}$/;
        let regexComments2 = /^.{1,4}$/;
        let regexComments3 = /^.{16,16}$/;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let regexNumber = /^[0-9]+$/;


        if (!shoppingForm.userName.trim()) {
            errors.userName = 'El campo "Nombre" es requerido';
        } else if (!regexName.test(shoppingForm.userName.trim())) {
            errors.userName = 'El campo "Nombre" solo acepta letras y espacios en blanco'
        } else if (!regexComments.test(shoppingForm.userName.trim())) {
            errors.userName = 'El campo "Nombre" no debe tener mas de 20 caracteres'
        } else

            if (!shoppingForm.lastname.trim()) {
                errors.lastname = 'El campo "Apellido" es requerido';
            } else if (!regexName.test(shoppingForm.lastname.trim())) {
                errors.lastname = 'El campo "Apellido" solo acepta letras y espacios en blanco'
            } else if (!regexComments.test(shoppingForm.lastname.trim())) {
                errors.lastname = 'El campo "Apellido" no debe tener mas de 20 caracteres'
            } else

                if (!shoppingForm.dni.trim()) {
                    errors.dni = 'El campo "DNI" es requerido';
                } else if (!regexNumber.test(shoppingForm.dni.trim())) {
                    errors.dni = 'El campo "DNI" solo acepta numeros';
                } else if (!regexComments1.test(shoppingForm.dni.trim())) {
                    errors.dni = 'El campo "DNI" solo debe tener entre 7 y 8 numeros'
                } else

                    // if (!shoppingForm.email.trim()) {
                    //     errors.email = 'El campo "Email" es requerido';
                    // } else if (!regexEmail.test(shoppingForm.email.trim())) {
                    //     errors.email = 'El campo "Email" es incorrecto'
                    // } else if (!regexComments.test(shoppingForm.email.trim())) {
                    //     errors.email = 'El campo "Email" no debe tener mas de 20 caracteres'
                    // } else

                        if (!shoppingForm.province.trim()) {
                            errors.province = 'El campo "Provincia" es requerido';
                        } else if (!regexName.test(shoppingForm.province.trim())) {
                            errors.province = 'El campo "Provincia" solo acepta letras y espacios en blanco'
                        } else if (!regexComments.test(shoppingForm.province.trim())) {
                            errors.province = 'El campo "Provincia" no debe tener mas de 20 caracteres'
                        } else

                            if (!shoppingForm.city.trim()) {
                                errors.city = 'El campo "Localidad" es requerido';
                            } else if (!regexName.test(shoppingForm.city.trim())) {
                                errors.city = 'El campo "Localidad" solo acepta letras y espacios en blanco'
                            } else if (!regexComments.test(shoppingForm.city.trim())) {
                                errors.city = 'El campo "Localidad" no debe tener mas de 20 caracteres'
                            } else

                                if (!shoppingForm.street.trim()) {
                                    errors.street = 'El campo "Calle" es requerido';
                                } else if (!regexName.test(shoppingForm.street.trim())) {
                                    errors.street = 'El campo "Calle" solo acepta letras y espacios en blanco'
                                } else if (!regexComments.test(shoppingForm.street.trim())) {
                                    errors.street = 'El campo "Calle" no debe tener mas de 20 caracteres'
                                } else

                                    if (!shoppingForm.numberStreet.trim()) {
                                        errors.numberStreet = 'El campo "Numero" es requerido';
                                    } else if (!regexNumber.test(shoppingForm.numberStreet.trim())) {
                                        errors.numberStreet = 'El campo "Numero" solo acepta numeros';
                                    } else if (!regexComments2.test(shoppingForm.numberStreet.trim())) {
                                        errors.numberStreet = 'El campo "Numero" debe tener hasta 4 numeros'
                                    } else

                                        if (!shoppingForm.card.trim()) {
                                            errors.card = 'El campo "Tarjeta" es requerido';
                                        } else if (!regexName.test(shoppingForm.card.trim())) {
                                            errors.card = 'El campo "Tarjeta" solo acepta letras y espacios en blanco'
                                        } else if (!regexComments.test(shoppingForm.card.trim())) {
                                            errors.card = 'El campo "Tarjeta" no debe tener mas de 20 caracteres'
                                        } else

                                            if (!shoppingForm.bank.trim()) {
                                                errors.bank = 'El campo "Banco" es requerido';
                                            } else if (!regexName.test(shoppingForm.bank.trim())) {
                                                errors.bank = 'El campo "Banco" solo acepta letras y espacios en blanco'
                                            } else if (!regexComments.test(shoppingForm.bank.trim())) {
                                                errors.bank = 'El campo "Banco" no debe tener mas de 20 caracteres'
                                            } else

                                                if (!shoppingForm.numberOfCard.trim()) {
                                                    errors.numberOfCard = 'El campo "Nro de Tarjeta" es requerido';
                                                } else if (!regexNumber.test(shoppingForm.numberOfCard.trim())) {
                                                    errors.numberOfCard = 'El campo "Nro de Tarjeta" solo acepta numeros';
                                                } else if (!regexComments3.test(shoppingForm.numberOfCard.trim())) {
                                                    errors.numberOfCard = 'El campo "Nro de Tarjeta" debe tener 16 numeros'
                                                }

        return errors;
    }



    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     console.log(e.target);
    //     setShoppingForm({
    //         ...shoppingForm,
    //         [name]: value,
    //     });

    //     console.log(shoppingForm)
    // }


    // const handleBlur = (e) => {
    //     handleChange(e);
    //     setErrors(validationShoppingForm(shoppingForm));
    // }



    return {
        initialShoppingForm,
        shoppingForm,
        errors,
        setShoppingForm,
        setErrors,
        // handleChange,
        // handleBlur,
        validationShoppingForm
    }

}


export default useShoppingForm;