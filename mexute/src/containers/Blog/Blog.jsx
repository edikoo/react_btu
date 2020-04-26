import React from 'react';
import './Blog.css';

import List from '../../components/Post/List';


function Blog(props){
    return(
        <div className="row flex-column">
            <p className="title">Lecture 5</p>
            <List />
        </div>
    )
}

export default Blog;