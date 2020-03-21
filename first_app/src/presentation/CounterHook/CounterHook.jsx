import React, {useState, useEffect} from 'react';
import Message from '../Message/Message';

function CounterHook({initial = 0})
{
    const [value, setValue] = useState(initial);
    const TAX = 0.2;
    const handleClick = (event) => {
        setValue(value + 1);
    }

    useEffect(() => {
        console.log("ae", TAX);
    },[TAX, value])

    return (
        <div>
            <button onClick={handleClick}>Increase Counter</button>
            <Message text={`Counter Hook - ${value}`} />
        </div>
    )
}

export default CounterHook;