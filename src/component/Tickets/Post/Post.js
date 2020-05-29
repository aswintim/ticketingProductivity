import React from 'react';
import classes from './Post.module.css';
import moment from 'moment';


const post = (props) => {
    return(
        <div className={classes.post} onClick={props.fullPostHandler}>
            <h1>{props.title}</h1>
    <div className={classes.author}>Created on: {moment(props.time.toDate()).calendar()}</div>
        </div>

    )
}
export default post;