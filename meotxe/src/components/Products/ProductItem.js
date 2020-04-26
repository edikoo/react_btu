import React from 'react'

function ProductItem({category, products})
{
    return(
        products.filter(product => {
            return product.category === category.id
        })
        .map(product => {
            return(
                <h2>{ product.title }</h2>
            )
        })
    );
}

export default ProductItem;