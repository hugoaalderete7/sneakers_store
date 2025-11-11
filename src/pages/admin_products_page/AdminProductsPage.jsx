import React, { useState } from 'react';
import ProductsForm from '../../components/form/products_form/ProductsForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { readProducts, deleteProduct } from '../../store/slices/products/productsThunks';
import No_Transp_Navbar from '../../components/navbar/No_Transp_Navbar';
import './AdminProductsPage.css';
import Searcher from '../../components/searcher/Searcher';

const AdminProductsPage = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const [dataToEdit, setDataToEdit] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [busqueda, setBusqueda] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        GetProducts();
    }, [dispatch]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const GetProducts = async () => {
        try {
            await dispatch(readProducts()).unwrap();
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    };

    const handleEdit = (product) => {
        setDataToEdit(product);
        setBusqueda('');
    };

    const handleDelete = async (product) => {
        try {
            await dispatch(deleteProduct(product._id)).unwrap(); // Asegura que se maneje la promesa correctamente
            dispatch(readProducts());
            setBusqueda('');
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    };

    let formatter = new Intl.NumberFormat('eng-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
    })

    return (
        <div className='products-admin-page-container'>
            <section className='navbar-products-admin-container'>
                <No_Transp_Navbar user={user} setUser={setUser} />
            </section>
            <section className='form-search-products-admin-container'>
                <section className='form-products-admin-container'>
                    <section className='form-products-admin'>
                        <ProductsForm dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} busqueda={busqueda} />
                    </section>
                </section>
                <section className='search-products-admin-container'>
                    <section className='search-products-admin'>
                        <Searcher elements={products} setFiltered={setFilteredProducts} busqueda={busqueda} setBusqueda={setBusqueda} products={products} />
                    </section>
                    <section>
                        {filteredProducts.map((product) => (
                            <section className='info-products-admin'>
                                <h4 key={product.id}>{product.name}</h4>
                                <h4>{formatter.format(product.price)}</h4>
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
                    </section>
                </section>
            </section>
        </div>
    );
}
export default AdminProductsPage;
