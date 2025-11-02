import React, { useState } from 'react';
import ProductsForm from '../../components/form/products_form/ProductsForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { readProducts, deleteProduct } from '../../store/slices/products/productsThunks';
import No_Transp_Navbar from '../../components/navbar/No_Transp_Navbar';
import './AdminProductsPage.css';

const AdminProductsPage = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const [dataToEdit, setDataToEdit] = useState(null);

    useEffect(() => {
        dispatch(readProducts());
    }, [dispatch]);

    const handleEdit = (product) => {
        setDataToEdit(product);
    };

    const handleDelete = async (product) => {
        try {
            await dispatch(deleteProduct(product._id)).unwrap(); // Asegura que se maneje la promesa correctamente
            dispatch(readProducts());
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    };

    return (
        <div className='products-admin-page-container'>
            <section className='navbar-users-admin-container'>
                <No_Transp_Navbar />
            </section>
            <section className='form-search-products-admin-container'>
                <section className='form-products-admin-container'>
                    <section className='form-products-admin'>
                        <ProductsForm dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
                    </section>
                </section>
                <section className='search-products-admin-container'>
                    <section className='search-products-admin'>
                        <h2 style={{ color: 'red', fontWeight: 'bold' }}>BUSCADOR</h2>
                    </section>
                    <section>
                        <ul>
                            {products.map((product) => (
                                <section className='info-products-admin'>
                                    <h4 key={product.id}>{product.name}</h4>
                                    <h4>{product.price}</h4>
                                    <h4>{product.brand}</h4>
                                    <h4>{product.sex}</h4>
                                    <h4>{product.sport}</h4>
                                    <h4>{product.color}</h4>
                                    <h4>{product.size}</h4>
                                    <h4>{product.cantIngr}</h4>
                                    <img src={product.image} style={{ width: '6vw' }} />
                                    <button onClick={() => handleEdit(product)}>
                                        Actualizar
                                    </button>
                                    <button onClick={() => handleDelete(product)}>
                                        Eliminar
                                    </button>
                                </section>
                            ))}
                        </ul>
                    </section>
                </section>
            </section>
        </div>
    );
}

export default AdminProductsPage;
