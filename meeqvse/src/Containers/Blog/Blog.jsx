import React from 'react';
import Posts from '../../Components/Posts/Posts';
import Post from '../../Components/Posts/Post/Post';
import { Route, Router, Link } from 'react-router-dom';


function Blog(props)
{
	const { location } = props;
	console.log("[Blog.jsx]", location)

	const query = new URLSearchParams(location.search);
	for( let [key, value] of query.entries())
	{
		console.log("Key:", key, "Value:", value)
	}
	// blog => posts
	// blog/javascript-post => post


	return(
		<div className="row p-4 flex-column">
            <h2>Blog Page</h2>
			<hr />

			<Route path={props.match.url} component={Posts} exact/>
			<Route path={props.match.url + '/:postId'} component={Post} />

        </div>
	);
}

export default Blog;