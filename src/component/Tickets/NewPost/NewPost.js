import React, { Component } from 'react';
import classes from './NewPost.module.css';

class newPost extends Component {
    render() {


        return (
            <div className={classes.newPost}>
                <h1>Add a Ticket</h1>

                <label>Title</label>
                <input type="text" />

                <label>Description</label>
                <textarea rows="4" />

                <button >Add Post</button>
            </div>
        )
    }
}
export default newPost;