import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar";


const HomePage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    return (
        <div className='global_container'>
            <article>
                <Navbar user={user} setUser={setUser} />
            </article>
            <article className='section_container'>
                <section className='section_title'>
                    <h2>Sneakers Store</h2>
                </section>
                <section className='section_username'>
                    {user && user.name ? (
                        <h3>Hola {user.name} !!</h3>
                    ) : (
                        <h3>Hola !!</h3>
                    )}
                </section>
                <section className='section_button'>
                    <button onClick={() => navigate("/products")}>Haz click aquí y encuentra lo que tanto buscas</button>
                </section>
                <h4>Inicia Sesión y prueba con un usuario común:</h4>
                <h4>email: lio@gmail.com</h4>
                <h4>contraseña: 12345</h4>
                <h4>Inicia Sesión y prueba con el Admin:</h4>
                <h4>email: hugo@gmail.com</h4>
                <h4>contraseña: 12345</h4>
            </article>
        </div>
    );
}

export default HomePage;
