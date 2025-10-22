import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from '../../pages/error_page/ErrorPage';
import HomePage from '../../pages/home_page/HomePage';
import RegisterPage from '../../pages/register_page/RegisterPage';
import AdminUsersPage from '../../pages/admin_users_page/AdminUsersPage';
import LoginPage from '../../pages/login_page/LoginPage';
import Navbar from '../navbar/Navbar';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/admin-users" element={<AdminUsersPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
