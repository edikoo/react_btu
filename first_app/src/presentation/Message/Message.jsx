import React from 'react';


function Message({text="default", status="success"}) {
    return (
        <div>
            <h2 className={`message message-${status}`}>{text}</h2>
        </div>
    );
}


export default Message;