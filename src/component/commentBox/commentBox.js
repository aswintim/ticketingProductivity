import React, { Component } from 'react';
import classes from './commentBox.module.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/index';

class commentBox extends Component {
    state = { 
        comment: ''
}

    submitCommentHandler=(event)=>{
        event.preventDefault();
        if(this.state.comment.length > 1){
            this.props.onSubmitComment(this.state.comment, this.props.match.params.id);
            this.setState({comment: ''})
            window.location.reload();

    }
    else{
        alert('Type something in the comment box!')
    }  
    }

    render() {
        return (
            <div >
                <form onSubmit={this.submitCommentHandler} className={classes.commBox}>
                <textarea
                    className={classes.commentBox}
                    placeholder='Comment...'
                    value={this.state.comment}
                    onChange={(event)=>this.setState({comment: event.target.value})}
                />
        
                <button type='submit' className={classes.newPostButton}>Comment</button>
           </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onSubmitComment: (comment, id)=>dispatch(actions.submitCommentHandler(comment, id))
    }
}


export default connect(null, mapDispatchToProps)(withRouter(commentBox));
