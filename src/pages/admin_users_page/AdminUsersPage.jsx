import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readUsers } from '../../store/slices/users/usersThunks';

const AdminUsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    async function fetchUsers() {
        dispatch(readUsers());
    }

    useEffect(() => {
        fetchUsers();
    }, [dispatch]);

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email} - {user.admin}</li>
                ))}
            </ul>
        </div>
    );
}

export default AdminUsersPage;
