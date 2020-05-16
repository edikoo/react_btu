import React from 'react';
import UsersList from '../../Components/Users/Users'

function Users(props)
{
	return(
		<div className="row p-4 flex-column">
            <h2>Users Page</h2>
			<UsersList />
        </div>
	);
}

export default Users;