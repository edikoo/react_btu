import React, { useState } from 'react';
import Persons from './Persons';


function Person(props) {

    const [showPersons, setShowPersons] = useState(false);

    const togglePersons = (ev) => {
        setShowPersons(!showPersons);
    }

    console.log("[Person/index.js] executed")
    return (
        <div>
            <button onClick={togglePersons}>Toggle List</button>
            { showPersons && <Persons />}
        </div>
    );
}

export default Person;