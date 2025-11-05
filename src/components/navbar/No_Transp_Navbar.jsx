import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import "./No_Transp_Navbar.css";
import { setLogout } from '../../store/slices/auth/authSlice';

const No_Transp_Navbar = ({ user, setUser }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState = useSelector((state) => state.auth);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const parseUser = token ? JSON.parse(token).usuario : null;
        setUser(parseUser);
    }, [authState]);

    const handleLogout = () => {
        dispatch(setLogout());
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <nav className='no_transp_nav'>
            <ul className='nav_ul'>
                <li className='nav_li'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : "no_active"} >Inicio</NavLink>
                </li>
                {user && user.admin === 'true' && (
                    <li className='nav_li'>
                        <NavLink to="/admin-users" className={({ isActive }) => isActive ? "active" : "no_active"}>Admin_Usuarios</NavLink>
                    </li>
                )}
                {user && user.admin === 'true' && (
                    <li className='nav_li'>
                        <NavLink to="/admin-products" className={({ isActive }) => isActive ? "active" : "no_active"}>Admin_Productos</NavLink>
                    </li>
                )}
                <li className='nav_li'>
                    <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : "no_active"}>Carrito</NavLink>
                </li>
                <li className='nav_li'>
                    <NavLink to="/register" className={({ isActive }) => isActive ? "active" : "no_active"}>Regístrate</NavLink>
                </li>
                <li className='nav_li'>
                    {user ?
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : "no_active"} onClick={handleLogout}>Cerrar Sesión</NavLink>
                        :
                        <NavLink to="/login" className={({ isActive }) => isActive ? "active" : "no_active"}>Inicia Sesión</NavLink>
                    }
                </li>
            </ul>
        </nav>
    );
}

export default No_Transp_Navbar;