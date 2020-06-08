import React from 'react';
import classes from './comment.module.css';
import moment from 'moment';


const comment = (props) => {
    return (
        <div className={classes.comment}>
            {props.usersComment}
            <span className={classes.time}>{moment(props.commentTime.toDate()).calendar()}</span>
        </div>
    )
}

export default comment;