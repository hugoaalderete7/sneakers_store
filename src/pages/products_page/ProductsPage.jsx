import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readProducts } from '../../store/slices/products/productsThunks';
import ProductCard from '../../components/card/ProductCard';

const ProductsPage = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readProducts());
    }, [dispatch]);


    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} el={product} />
            ))}
        </div>
    );
}

export default ProductsPage;
