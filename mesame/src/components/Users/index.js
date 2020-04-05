import React, {useState} from 'react';
import NoParent from '../hoc/NoParent'
import Users from './Users';

let x = 0;

const userList = [
    {
        name: 'zura', id: x++ 
    },
    {
        name: 'megi', id: x++ 
    },
    {
        name: 'joni', id: x++ 
    }
]


function User(props) {

    const [users, setUsers] = useState(userList);

    const popUser = () => {
        users.pop();
        setUsers([...users]);
    };

    return (
        <NoParent>
            <Users users={users}/>
            <h2>users index.js</h2>
            <button onClick={popUser}>Remove User</button>
            <h2>users page</h2>
        </NoParent>
    );
}

export default User;