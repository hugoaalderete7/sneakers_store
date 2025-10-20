import React, { useEffect } from 'react';
import UseForm from '../../hooks/useForm';
import "./RegisterForm.css";
import { useDispatch } from 'react-redux';
import { createUser } from '../../store/slices/users/usersThunks';

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
                // const response = await axios.post("http://localhost:4000/api/users", form);
                // console.log(response);
                dispatch(createUser(form));
                
                
                alert("Te registraste con éxito, Inicia Sesion y podras realizar tus compras!!!");
                setForm(initialForm);
                setErrors(initialErrors);
            }
            else {
                alert('Debes completar correctamente todos los campos !!');
            }
            // } else {
            //     UpDateUsers(form);
            // }
            console.log(form);
            console.log(errors);

        } catch (error) {
            console.log(error);
            // alert(error.response.data);
            setForm(initialForm);
        }
    }


    return (
        <div className='form-container'>
            <form className='form'>
                <h2 className='h2-login-register'>Registrate aqui !!</h2>
                <input
                    className="input-login-register"
                    name='name'
                    type='text'
                    placeholder='Nombre'
                    onChange={handleChange}
                    onBlur={handleBlurRegister}
                    value={form.name || ""}
                />
                {errors.name && <p style={styles}>{errors.name}</p>}
                <input
                    className="input-login-register"
                    name='lastname'
                    type='text'
                    placeholder='Apellido'
                    onChange={handleChange}
                    onBlur={handleBlurRegister}
                    value={form.lastname || ""}
                />
                {errors.lastname && <p style={styles}>{errors.lastname}</p>}
                <input
                    className="input-login-register"
                    name='age'
                    type='number'
                    placeholder='Edad'
                    onChange={handleChange}
                    onBlur={handleBlurRegister}
                    value={form.age || ""}
                />
                {errors.age && <p style={styles}>{errors.age}</p>}
                <input
                    className="input-login-register"
                    name='email'
                    type='email'
                    placeholder='Email'
                    onChange={handleChange}
                    onBlur={handleBlurRegister}
                    value={form.email || ""}
                />
                {errors.email && <p style={styles}>{errors.email}</p>}
                <input
                    className="input-login-register"
                    name='password'
                    type='password'
                    placeholder='Contraseña'
                    onChange={handleChange}
                    onBlur={handleBlurRegister}
                    value={form.password || ""}
                />
                {errors.password && <p style={styles}>{errors.password}</p>}
                
                <button className="button-login-register" onClick={(e) => handleSubmit(e)}>Enviar</button>
            </form>

        </div>
    );
}

export default RegisterForm;
