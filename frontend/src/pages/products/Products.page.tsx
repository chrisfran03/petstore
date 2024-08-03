import { IProduct } from '../../types/global.typing';
import './products.scss'
import { useState, useEffect } from 'react';

const Products: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    return (
        <div className="products">
            <h1>Products List</h1>
        </div>
    );
};

export default Products