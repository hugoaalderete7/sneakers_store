import React, { useState } from 'react';
import LoginForm from '../../components/form/login_register_form/LoginForm';
import { NavLink } from 'react-router-dom';
import "./LoginPage.css"
import Navbar from '../../components/navbar/Navbar';

const LoginPage = () => {
    const [user, setUser] = useState(null);

    return (
        <div className='login_global_container'>
            <article>
                <Navbar user={user} setUser={setUser} />
            </article>
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
