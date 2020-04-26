import React from 'react';

import Products from '../Products/index';


function Main(props)
{
    console.log(productsList);
    return(
        <div>
            <h2>Hello From Main</h2>
            <Products />
        </div>
    )
}

export default Main;