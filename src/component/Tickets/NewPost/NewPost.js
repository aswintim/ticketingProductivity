import React, { Component } from 'react';
import classes from './NewPost.module.css';
import {db} from '../../../services/firebase';

class newPost extends Component {
    state={
        title: '',
        description:'',
        time: new Date()
    }


    addNewTicket=()=>{
        db.collection('tickets')
        .add({
            title: this.state.title,
            description: this.state.description,
            time:this.state.time
        })
    }

    resetHandler=()=>{
        this.setState({title: '',
        description:'',
        time: new Date()})
    }

    refreshPage =()=>{
        window.location.reload(false);
    }

    
    render() {
        

        return (
            <div className={classes.newPost}>
                <h1>Add a Ticket</h1>

                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event)=>this.setState({title: event.target.value})}/>

                <label>Description</label>
                <textarea rows="4" value={this.state.description} onChange={(event)=>this.setState({description: event.target.value})}/>

                <div className={classes.buttons}>
                <button onClick={()=>{this.addNewTicket(); this.refreshPage() }}>Add Post</button>
                <button onClick={()=>{this.props.removeModalHandler(); this.resetHandler()}} >Cancel</button>
                </div>
            </div>
        )
    }
}
export default newPost;