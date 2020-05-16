import React from 'react';

function Posts(props)
{
	const redirectToDetail = () => {
		//props.history.push(props.match.url + '/4000');
		props.history.push({
			pathname: props.match.url + '/300',
			search: "title=html"
		})
	}

	
	return(
		<div className="row p-4 flex-column">
            <h2>Posts Page</h2>
			<hr />
			<button onClick={redirectToDetail} > Post Detail</button>

        </div>
	);
}

export default Posts;