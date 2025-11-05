import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readUsers, deleteUser } from '../../store/slices/users/usersThunks';
import './AdminUsersPage.css';
import No_Transp_Navbar from '../../components/navbar/No_Transp_Navbar';
import RegisterForm from '../../components/form/login_register_form/RegisterForm';
import Searcher from '../../components/searcher/Searcher';

const AdminUsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const user = useSelector(state => state.auth.user);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [busqueda, setBusqueda] = useState('');

    async function fetchUsers() {
        dispatch(readUsers());
    }

    useEffect(() => {
        fetchUsers();
    }, [dispatch]);

    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    const handleEdit = (user) => {
        setDataToEdit(user);
        setBusqueda('');
    };

    const handleDelete = async (user) => {
        try {
            await dispatch(deleteUser(user._id)).unwrap(); // Asegura que se maneje la promesa correctamente
            dispatch(readUsers());
            setBusqueda('');
        } catch (error) {
            console.error("Error al eliminar el usuario:", error);
        }
    };

    return (
        <div className='users-admin-page-container'>
            <section className='navbar-users-admin-container'>
                <No_Transp_Navbar />
            </section>

            <section className='form-search-users-admin-container'>
                <section className='form-users-admin-container'>
                    <RegisterForm dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} setBusqueda={setBusqueda} />
                </section>

                <section className='search-users-admin-container'>
                    <section className='search-users-admin'>
                        <Searcher elements={users} setFiltered={setFilteredUsers} busqueda={busqueda} setBusqueda={setBusqueda} />
                    </section>
                    <section>
                        {filteredUsers.map(user => (
                            <section className='info-users-admin'>
                                <h4 key={user.id}>{user.name}</h4>
                                <h4>{user.lastname}</h4>
                                <h4>{user.age}</h4>
                                <h4>{user.email}</h4>
                                <h4>{user.admin}</h4>
                                <button onClick={() => handleEdit(user)}>Actualizar</button>
                                <button onClick={() => handleDelete(user)}>Eliminar</button>
                            </section>
                        ))}
                    </section>
                </section>
            </section>
        </div>
    );
}

export default AdminUsersPage;
