import React from 'react';
import UseForm from '../../../hooks/useForm';
import "./LoginRegisterForm.css";
import { useDispatch } from 'react-redux';
import { login } from '../../../store/slices/auth/authThunks';
import { useNavigate } from 'react-router-dom';


let styles = {
    fontWeight: "bold",
    color: "#dc3545"
}

const LoginForm = () => {
    const { initialForm, initialErrors, form, errors, setForm, setErrors, handleChange, handleBlurLogin } = UseForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("Formulario enviado:", form);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (JSON.stringify(form) === JSON.stringify(initialForm)) {
                return alert("El formulario está vacío, debes llenar todos los campos requeridos !!");
            }
            if (JSON.stringify(errors) === JSON.stringify(initialErrors)) {
                dispatch(login(form));
                alert("Bienvenido!!!");
                setForm(initialForm);
                setErrors(initialErrors);
                navigate("/");
            } else {
                alert('Debes completar correctamente todos los campos !!');
            }
        } catch (error) {
            console.log(error);
            setForm(initialForm);
        }
    }

    return (
        <div className='form-container'>
            <form className='form'>
                <h2 className='h2-login-register'>Inicia Sesión</h2>
                <input
                    className="input-login-register"
                    name='email'
                    type='email'
                    placeholder='Email'
                    onChange={handleChange}
                    onBlur={handleBlurLogin}
                    value={form.email || ""}
                />
                {errors.email && <p style={styles}>{errors.email}</p>}
                <input
                    className="input-login-register"
                    name='password'
                    type='password'
                    placeholder='Contraseña'
                    onChange={handleChange}
                    onBlur={handleBlurLogin}
                    value={form.password || ""}
                />
                {errors.password && <p style={styles}>{errors.password}</p>}

                <button type="button" className="button-login-register" onClick={(e) => handleSubmit(e)}>Enviar</button>
            </form>
        </div>
    );
}

export default LoginForm;