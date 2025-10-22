import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readProducts } from '../../store/slices/products/productsThunks';

const ProductsPage = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readProducts());
    }, [dispatch]);


    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsPage;
