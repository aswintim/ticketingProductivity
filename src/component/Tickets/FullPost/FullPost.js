import React from 'react';
import classes from './FullPost.module.css';


const fullPost = (props) => {
    return(
        // className={classes.fullPost}
        <div className={classes.fullPost}>
            <h1>Title</h1>
            <p>This is paragraph</p>
            <a href="/">Delete</a>
        </div>
    )
}
export default fullPost;