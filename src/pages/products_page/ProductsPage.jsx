import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readProducts } from '../../store/slices/products/productsThunks';
import ProductCard from '../../components/card/ProductCard';
import "./ProductsPage.css";
import No_Transp_Navbar from '../../components/navbar/No_Transp_Navbar';
import Filter from '../../components/filters/filter';

const ProductsPage = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [productsShow, setProductsShow] = useState([]);
    console.log(productsShow)

    useEffect(() => {
        dispatch(readProducts());
    }, [dispatch]);

    return (
        <div>
            <section className='no-transp-navbar-container'>
                <No_Transp_Navbar user={user} setUser={setUser} />
            </section>
            <section className='filters-cards-container'>
                <section className='filters-container'>
                    <Filter products={products} setProductsShow={setProductsShow} />
                </section>
                <section className='card-container'>
                    {productsShow.length !== 0 ?
                        productsShow.map((product) => (
                            <div className='card'>
                                <ProductCard key={product.id} el={product} />
                            </div>
                        ))
                        :
                        products.map((product) => (
                            <div className='card'>
                                <ProductCard key={product.id} el={product} />
                            </div>
                        ))}
                </section>
            </section>
        </div>
    );
}

export default ProductsPage;
