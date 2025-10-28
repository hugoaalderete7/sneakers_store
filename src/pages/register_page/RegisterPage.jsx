import React from 'react';
import RegisterForm from '../../components/form/login_register_form/RegisterForm';
import "./RegisterPage.css";
import { NavLink, useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const navigate = useNavigate();

    return (
        <div className='register_global_container'>
            <img src="../../../images/fondo_mejorado.png" alt="" className='register_img' />
            <section className='register_form_container'>
                <section>
                    <RegisterForm />
                </section>
                <section className='register_navlink_container'>
                    <NavLink to="/" className="register_navlink" >Volver</NavLink>
                </section>
            </section>
        </div>
    );
}

export default RegisterPage;
