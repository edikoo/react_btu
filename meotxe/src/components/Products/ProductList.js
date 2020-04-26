import React from 'react';
import PropTypes from 'prop-types';

function ProductList({categories, products}){
    return(
        <div>
        {
            categories.map(category => {
                return (
                    <div>
                        <h2>{category.title}</h2>
                        <hr />
                        {
                            products.filter(product => {
                                return product.category === category.id
                            })
                            .map(product => {
                                return(
                                    <h2>{ product.title }</h2>
                                )
                            })
                        }
                    </div>
            
                )
            })
        }

                    
        </div>
    );
}

ProductList.defaultProps = {
    products: [],
    categories: []
}


ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
}

export default ProductList;