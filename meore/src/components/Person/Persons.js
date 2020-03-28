import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import PersonItem from './PersonItem';



let id = 100;

const usersList = [
    { name: "John", id: id++ },
    { name: "Ann", id: id++ },
    { name: "Jane", id: id++ },
    { name: "Tonny", id: id++ },
    { name: "Gela", id: id++ }
]


function Persons() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("[Person.js] useEffect Start")
        const timeId = setTimeout(() => {
            alert("Response data");
            setUsers([...usersList]);
        }, 2000)
        return () => {
            console.log("[Person.js] useEffect Close")
            clearTimeout(timeId);
        }
    })


    const handleRemoval = (user) => {
        const removed = users.pop();
        setUsers([...users]);
    };

    return (
        <div>
            <h2>Persons.js</h2>
            <hr />
            { users.length > 0 ? users.map(user => 
            <PersonItem 
                key={user.id} 
                user={user} 
                handleRemoval={handleRemoval} 
            />) : null}
        </div>
    );
}


/*
Persons.defaultProps = {
    users: []
}

Persons.propTypes = {
    users: PropTypes.array.isRequired
}
*/

export default Persons;