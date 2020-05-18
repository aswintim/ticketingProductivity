import React from 'react';
import classes from './Post.module.css';


const post = (props) => {
    return(
        <div className={classes.post}>
            <h1>Title</h1>
            <div className={classes.author}>Aswin</div>
        </div>

    )
}
export default post;