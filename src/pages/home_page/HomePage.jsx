import React, { use, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../store/slices/auth/authSlice';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [userName, setUserName] = useState("");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    console.log("Usuario en HomePage:", user);


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
        <div>
            {userName ?
                <h2>Hola {userName}!!!</h2>
                :
                <h2>Inicia Sesión</h2>
            }
            <button onClick={() => navigate("/products")}>ProductsPage</button>
        </div>
    );
}

export default HomePage;
