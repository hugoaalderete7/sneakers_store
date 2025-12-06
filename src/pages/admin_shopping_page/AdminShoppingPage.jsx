import React, { useEffect } from 'react';
import './AdminShoppingPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { readInvoices } from '../../store/slices/invoice/invoiceThunks';

const AdminShoppingPage = () => {
    const invoices = useSelector((state) => state.invoices.invoices);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(readInvoices());
    }, [dispatch]);
    
    console.log(invoices);
    
    return (
        <div>
            Soy Admin Shopping Page
        </div>
    );
}

export default AdminShoppingPage;
