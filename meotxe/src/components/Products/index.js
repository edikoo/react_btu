import React, { useState, useRef, useEffect } from 'react';
import ProductList from './ProductList';

import productsList from '../../db/products';
import Categories from '../../db/category';

function Products(props){

    const [showProducts, setShowProducts] = useState(false);
    const refToShow = useRef(null);
    

    useEffect(() => {
        setTimeout(() => {
            refToShow.current.click();
        }, 1500)
    }, [])

    const handleClick = () => {
        setShowProducts(!showProducts);
    }

    return(
        <div>
            <h3 onClick={handleClick} ref={refToShow}>Products</h3>
            
            <div className="products">
            {
                showProducts && 
                <ProductList products={productsList} categories={Categories} />
            }
            </div>
        </div>
    )
}




export default Products;