import React, { Component } from 'react';
import classes from './NewPost.module.css';
import {connect} from 'react-redux';
import * as actions from '../../../store/index';
import {db} from '../../../services/firebase';


class newPost extends Component {
    state={
        title: '',
        description:'',
        time: new Date()
    }


    addNewTicket=(event)=>{
        event.preventDefault();
        if(this.state.title.trim().length > 0 || this.state.description.trim().length >0 ){
            this.props.onAddNewTicket({...this.state, userId: this.props.userId});
        }
        this.props.removeModalHandler();
        this.resetHandler();
        
    }

    resetHandler=()=>{
        this.setState({title: '',
        description:'',
        time: new Date()})
    }

    // refreshPage =()=>{
    //     window.location.reload(false);
    // }

    
    render() { 
        return (
            <div>
                <form onSubmit={this.addNewTicket} className={classes.newPost}>
                <h1>Add a Ticket</h1>

                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event)=>this.setState({title: event.target.value})}/>

                <label>Description</label>
                <textarea rows="4" value={this.state.description} onChange={(event)=>this.setState({description: event.target.value})}/>

                <div className={classes.buttons}>
                <button type='submit'>Add Post</button>
                <button onClick={()=>{this.props.removeModalHandler(); this.resetHandler()}} >Cancel</button>
                </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAddNewTicket: (data)=>dispatch(actions.addNewTicket(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(newPost);