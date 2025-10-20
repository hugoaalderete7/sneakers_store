import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/register" activeClassName="active">Registrate</NavLink>
            <NavLink to="/admin-users" activeClassName="active">Admin_Users</NavLink>
        </nav>
    );
}

export default Navbar;
