import React from 'react';
import classes from './comment.module.css';
import moment from 'moment';


const comment = (props) =>{
    return(
    <div className={classes.comment}>Comment: {props.usersComment} Modified Time: {moment(props.commentTime.toDate()).calendar()}</div>
    )
}

export default comment;