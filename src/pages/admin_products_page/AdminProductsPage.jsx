import React from 'react';
import ProductsForm from '../../components/form/ProductsForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { readProducts } from '../../store/slices/products/productsThunks';

const AdminProductsPage = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readProducts());
    }, [dispatch]);

    return (
        <div>
            <section>
                <ProductsForm />
            </section>
            <section>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.name} - ${product.price}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default AdminProductsPage;
