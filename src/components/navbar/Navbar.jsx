import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { setLogout } from '../../store/slices/auth/authSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const user = token ? JSON.parse(token).usuario : null;
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(setLogout());
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <nav>
            <NavLink to="/" className={({isActive})=> isActive ? "active" : "" }>Home</NavLink>
            <NavLink to="/register" className={({isActive})=> isActive ? "active" : "" }>Registrate</NavLink>
            {user ?
                <NavLink to="/" className={({isActive})=> isActive ? "active" : "" } onClick={handleLogout}>Cerrar Sesión</NavLink>
                :
                <NavLink to="/login" className={({isActive})=> isActive ? "active" : "" }>Inicia Sesión</NavLink>
            }
            <NavLink to="/admin-users" className={({isActive})=> isActive ? "active" : "" }>Admin_Users</NavLink>
            <NavLink to="/admin-products" className={({isActive})=> isActive ? "active" : "" }>Admin_Products</NavLink>
        </nav>
    );
}

export default Navbar;
