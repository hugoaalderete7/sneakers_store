import { useState } from 'react';


const UseForm = () => {
    const initialForm = {
        name: "",
        lastname: "",
        age: "",
        email: "",
        password: ""
    }

    const initialErrors = {};

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(initialErrors);

    const validationFormRegister = (form) => {
        let errors = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexComments = /^.{1,30}$/;
        let regexComments1 = /^.{1,2}$/;
        let regexComments2 = /^.{4,8}$/;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!form.name.trim()) {
            errors.name = 'El campo "Nombre" es requerido';
        } else if (!regexName.test(form.name.trim())) {
            errors.name = 'El campo "Nombre" solo acepta letras y espacios en blanco'
        } else if (!regexComments.test(form.name.trim())) {
            errors.name = 'El campo "Nombre" no debe tener mas de 20 caracteres'
        } else
            if (!form.lastname.trim()) {
                errors.lastname = 'El campo "Apellido" es requerido';
            } else if (!regexName.test(form.lastname.trim())) {
                errors.lastname = 'El campo "Apellido" solo acepta letras y espacios en blanco'
            } else if (!regexComments.test(form.lastname.trim())) {
                errors.lastname = 'El campo "Apellido" no debe tener mas de 20 caracteres'
            } else
                if (form.age && !regexComments1.test(form.age)) {
                    errors.age = 'El campo "Edad" no debe tener mas de 2 caracteres'
                } else
                    if (!form.email.trim()) {
                        errors.email = 'El campo "Email" es requerido';
                    } else if (!regexEmail.test(form.email.trim())) {
                        errors.email = 'El campo "Email" es incorrecto'
                    } else if (!regexComments.test(form.email.trim())) {
                        errors.email = 'El campo "Email" no debe tener mas de 30 caracteres'
                    } else
                        if (!form.password.trim()) {
                            errors.password = 'El campo "Contraseña" es requerido';
                        } else if (!regexComments2.test(form.password.trim())) {
                            errors.password = 'El campo "Contraseña" debe tener mas de 4 y menos de 8 caracteres'
                        }
        return errors;
    }

    const validationFormLogin = (form) => {
        let errors = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexComments = /^.{1,20}$/;
        let regexComments1 = /^.{1,2}$/;
        let regexComments2 = /^.{4,8}$/;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!form.email.trim()) {
            errors.email = 'El campo "Email" es requerido';
        } else if (!regexEmail.test(form.email.trim())) {
            errors.email = 'El campo "Email" es incorrecto'
        } else if (!regexComments.test(form.email.trim())) {
            errors.email = 'El campo "Email" no debe tener mas de 20 caracteres'
        } else
            if (!form.password.trim()) {
                errors.password = 'El campo "Contraseña" es requerido';
            } else if (!regexComments2.test(form.password.trim())) {
                errors.password = 'El campo "Contraseña" debe tener mas de 4 y menos de 8 caracteres'
            }
        return errors;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
            admin: false
        });
        console.log(form)
    }

    const handleBlurRegister = (e) => {
        handleChange(e);
        setErrors(validationFormRegister(form));
    }

    const handleBlurLogin = (e) => {
        handleChange(e);
        setErrors(validationFormLogin(form));
    }

    return {
        initialForm,
        initialErrors,
        form,
        errors,
        setForm,
        setErrors,
        handleChange,
        handleBlurRegister,
        handleBlurLogin
    }
}

export default UseForm;