import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../store/slices/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar";


const HomePage = () => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        checkToken();
    }, [token]);

    const checkToken = () => {
        if (!token) {
            dispatch(setLogout());
            setUserName("");
            return;
        }
        const dataToken = JSON.parse(token);
        setUserName(dataToken.usuario.name);
    }

    return (
        <div className='global_container'>
            <article>
                <Navbar />
            </article>
            <article className='section_container'>
                <section className='section_title'>
                    <h2>Sneakers Store</h2>
                </section>
                <section className='section_username'>
                    {userName ?
                        <h3>Hola {userName} !!</h3>
                        :
                        <h3>Hola !!</h3>
                    }
                </section>
                <section className='section_button'>
                    <button onClick={() => navigate("/products")}>Haz click aquí y encuentra lo que tanto buscas</button>
                </section>
            </article>
        </div>
    );
}

export default HomePage;
