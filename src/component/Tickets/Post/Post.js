import React from 'react';
import classes from './Post.module.css';


const post = (props) => {
    return(
        <div className={classes.post} onClick={props.fullPostHandler}>
            <h1>{props.title}</h1>
    <div className={classes.author}>{props.author}</div>
        </div>

    )
}
export default post;