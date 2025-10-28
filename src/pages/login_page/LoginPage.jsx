import React from 'react';
import LoginForm from '../../components/form/login_register_form/LoginForm';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "./LoginPage.css"

const LoginPage = () => {

    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    console.log("User en LoginPage:", user);

    return (
           <div className='login_global_container'>
            <img src="../../../images/fondo_mejorado.png" alt="" className='login_img' />
            <section className='login_form_container'>
                <section>
                    <LoginForm />
                </section>
                <section className='login_navlink_container'>
                    <NavLink to="/" className="login_navlink" >Volver</NavLink>
                </section>
            </section>
        </div>
    );
}

export default LoginPage;
