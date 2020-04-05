import React from 'react';
import User from './User/User';

function Users(props)
{
    return(
        <div>
            {props.users.map(user => {return <User key={user.id} u={user.name} /> })}
        </div>
    );
}

export default Users;