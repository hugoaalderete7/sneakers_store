import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from '../../pages/error_page/ErrorPage';
import HomePage from '../../pages/home_page/HomePage';
import RegisterPage from '../../pages/register_page/RegisterPage';
import AdminUsersPage from '../../pages/admin_users_page/AdminUsersPage';
import LoginPage from '../../pages/login_page/LoginPage';
import ProductsPage from '../../pages/products_page/ProductsPage';
import AdminProductsPage from '../../pages/admin_products_page/AdminProductsPage';
import ProductPage from '../../pages/product_page/ProductPage';
import CartPage from '../../pages/cart_page/CartPage';

const AppRoutes = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/admin-users" element={<AdminUsersPage />} />
                <Route path="/admin-products" element={<AdminProductsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
