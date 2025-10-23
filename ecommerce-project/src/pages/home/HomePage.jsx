import axios from 'axios'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import './HomePage.css';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({ cart }) {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');


    useEffect(() => {
        const getHomeData = async () => {

            const url = search ? `/api/products/?search=${search}` : '/api/products';
            const response = await axios.get(url);

            setProducts(response.data);
        }

        getHomeData();

    }, [search]);
   


    return (

        <>
            <title>Ecommerce Project</title>
            <Header cart={cart} />



            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    )
}