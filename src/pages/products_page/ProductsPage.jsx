import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSameNameSexColorProducts } from '../../store/slices/products/productsThunks';
import ProductCard from '../../components/card/ProductCard';
import "./ProductsPage.css";
import No_Transp_Navbar from '../../components/navbar/No_Transp_Navbar';
import Filter from '../../components/filters/Filter';

const ProductsPage = () => {
    const sameNameSexColorProducts = useSelector((state) => state.products.sameNameSexColorProducts);
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [productsShow, setProductsShow] = useState([]);

    useEffect(() => {
        listProducts();
    }, [dispatch]);

    const listProducts = async () => {
        try {
            await dispatch(listSameNameSexColorProducts()).unwrap();
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    };

    return (
        <div>
            <section className='no-transp-navbar-container'>
                <No_Transp_Navbar user={user} setUser={setUser} />
            </section>
            <section className='filters-cards-container'>
                <section className='filters-container'>
                    {
                        sameNameSexColorProducts?.length === 0 ?
                            <h3>Cargando filtros...</h3>
                            :
                            <Filter products={sameNameSexColorProducts} setProductsShow={setProductsShow} />
                    }
                </section>
                <section className='card-container'>
                    {productsShow?.length !== 0 ?
                        productsShow?.map((product) => (
                            <div className='card'>
                                <ProductCard key={product.id} el={product} />
                            </div>
                        ))
                        :
                        sameNameSexColorProducts?.map((product) => (
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
