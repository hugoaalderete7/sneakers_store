import React from 'react';
import LoginForm from '../../components/form/LoginForm';
import { useSelector } from 'react-redux';

const LoginPage = () => {

    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    console.log("User en LoginPage:", user);

    return (
        <div>
            <LoginForm />
            <ul>
                <li>Email: {user.email}</li>
                <li>Admin: {user.admin}</li>
                <li>Nombre: {user.name}</li>
                <li>Apellido: {user.lastname}</li>
                <li>Token: {token ? "Sí" : "No"}</li>
            </ul>
        </div>
    );
}

export default LoginPage;
