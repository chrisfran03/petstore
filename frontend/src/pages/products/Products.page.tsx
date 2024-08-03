import { useState, useEffect } from 'react';
import './products.scss'
import axios from 'axios';
import { baseUrl } from '../../constants/url.constant';
import { IProduct } from '../../types/global.typing';

const Products: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const fetchProductsList = async () => {
        try {
            const response = await axios.get<IProduct[]>(baseUrl);
            setProducts(response.data);

        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchProductsList();
    }, []);

    console.log(products);
    return (
        <div className="products">
            <h1>Products List</h1>
        </div>
    );
};

export default Products