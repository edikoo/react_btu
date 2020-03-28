import React, { useState } from 'react';

import Cars from './Cars';

function Car(props)
{

    const [showCars, setShowCars] = useState(false);

    const toggleCars = (ev) => {
        setShowCars(!setShowCars);
    }
    
    return (
        <div>
            <button onClick={toggleCars}>Toggle Cars</button>
            { showCars && <Cars />}
        </div>
    )
}

export default Car;