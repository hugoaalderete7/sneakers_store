import React, { useEffect, useState } from 'react';
import './AdminShoppingPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteInvoice, readInvoices } from '../../store/slices/invoice/invoiceThunks';
import No_Transp_Navbar from '../../components/navbar/No_Transp_Navbar';
import Searcher from '../../components/searcher/Searcher';

const AdminShoppingPage = () => {
    const invoices = useSelector((state) => state.invoices.invoices);
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [filteredInvoices, setFilteredInvoices] = useState(invoices);
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        dispatch(readInvoices());
    }, [dispatch]);

    console.log(invoices);
    console.log(filteredInvoices);

    useEffect(() => {
        setFilteredInvoices(invoices);
    }, [invoices]);

      const handleDelete = async (invoice) => {
            try {
                await dispatch(deleteInvoice(invoice._id)).unwrap(); // Asegura que se maneje la promesa correctamente
                dispatch(readInvoices());
                setBusqueda('');
            } catch (error) {
                console.error("Error al eliminar la factura:", error);
            }
        };

    return (
        <div className='users-admin-page-container'>
            <section className='navbar-users-admin-container'>
                <No_Transp_Navbar user={user} setUser={setUser} />
            </section>

            <section className='form-search-users-admin-container'>
                <section className='search-users-admin-container'>
                    <section className='search-users-admin'>
                        <Searcher elements={invoices} setFiltered={setFilteredInvoices} busqueda={busqueda} setBusqueda={setBusqueda} invoices={invoices} />
                    </section>
                    <section>
                        {filteredInvoices.map(invoice => (
                            <section className='info-users-admin'>
                                <h4 key={invoice._id}>{invoice.userName}</h4>
                                <h4>{invoice.lastname}</h4>
                                <h4>{invoice.province}</h4>
                                <h4>{invoice.card}</h4>
                                <h4>{invoice.bank}</h4>
                                <h4>{invoice.totalAmount}</h4>
                                {/* <button onClick={() => handleEdit(invoice)}>Actualizar</button> */}
                                <button onClick={() => handleDelete(invoice)}>Eliminar</button>
                            </section>
                        ))}
                    </section>
                </section>
            </section>
        </div>
    );
}

export default AdminShoppingPage;
