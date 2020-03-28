import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function PersonItem({user, handleRemoval}) {
    console.log("[PersonItem.js] executed")

    return (
        <div onClick={() => handleRemoval(user)}>
            <h2>PersonItem.js {user.name} {user.id}</h2>
        </div>
    );
}

PersonItem.propTypes = {
    user: PropTypes.object.isRequired,
    handleRemoval: PropTypes.func
}

export default PersonItem;