import React, { Component } from 'react';
import classes from './commentBox.module.css';
import {withRouter} from 'react-router-dom';
import { db } from '../../services/firebase';

class commentBox extends Component {
    state = { 
        comment: '',
        time: new Date()

}

    submitCommentHandler=()=>{
        if(this.state.comment.length > 1){
        db.collection('tickets').doc(this.props.match.params.id).collection('comment').add({
            comment: this.state.comment,
            time: this.state.time
        }).then(this.refreshPage());
    }
    else{
        alert('Type something in the comment box!')
    }

        
        
    }

    refreshPage=()=>{
        window.location.reload(false);
    }

    render() {
        return (
            <div className={classes.commBox}>
                <textarea
                    className={classes.commentBox}
                    placeholder='Comment...'
                    value={this.state.comment}
                    onChange={(event)=>this.setState({comment: event.target.value})}
                />
        
                <button className={classes.newPostButton} 
                onClick={this.submitCommentHandler}>Comment</button>
            </div>
        )
    }
}


export default withRouter(commentBox);
