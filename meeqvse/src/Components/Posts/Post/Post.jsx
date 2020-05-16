import React from 'react';
import { Redirect } from 'react-router-dom';
function Post(props)
{
	
	return(
		<div className="row p-4 flex-column">
			{ /* <Redirect to='/users'></Redirect> */}
			{ /* <button className="btn btn-info" onClick = {() => { props.history.replace('/blog') }}>Go Back</button> */}

            <h2>Post Page</h2>
			<h3>POST ID = {props.match.params.postId}</h3>
        </div>
	);
}

export default Post;