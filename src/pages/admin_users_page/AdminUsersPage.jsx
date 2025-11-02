import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readUsers } from '../../store/slices/users/usersThunks';
import './AdminUsersPage.css';
import No_Transp_Navbar from '../../components/navbar/No_Transp_Navbar';
import RegisterForm from '../../components/form/login_register_form/RegisterForm';

const AdminUsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const user = useSelector(state => state.auth.user);
    console.log("Usuario en AdminUsersPage:", user);

    async function fetchUsers() {
        dispatch(readUsers());
    }

    useEffect(() => {
        fetchUsers();
    }, [dispatch]);

    return (
        <div className='users-admin-page-container'>
            <section className='navbar-users-admin-container'>
                <No_Transp_Navbar />
            </section>

            <section className='form-search-users-admin-container'>
                <section className='form-users-admin-container'>
                    <RegisterForm />
                </section>
                
                <section className='search-users-admin-container'>
                    <section className='search-users-admin'>
                        <h2 style={{ color: 'red', fontWeight: 'bold' }}>BUSCADOR</h2>
                    </section>
                    <section>
                        {users.map(user => (
                            <section className='info-users-admin'>
                                <h4 key={user.id}>{user.name}</h4>
                                <h4>{user.lastname}</h4>
                                <h4>{user.age}</h4>
                                <h4>{user.email}</h4>
                                <h4>{user.admin}</h4>
                            </section>

                        ))}
                    </section>
                </section>
            </section>
        </div>
    );
}

export default AdminUsersPage;
