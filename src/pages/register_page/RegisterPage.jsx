import React, { useState } from 'react';
import RegisterForm from '../../components/form/login_register_form/RegisterForm';
import "./RegisterPage.css";
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const RegisterPage = () => {
    const [user, setUser] = useState(null);

    return (
        <div className='register_global_container'>
            <article className='register_navbar_container'>
                <Navbar user={user} setUser={setUser} />
            </article>
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
