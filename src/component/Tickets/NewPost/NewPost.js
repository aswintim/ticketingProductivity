import React from 'react';
import classes from './NewPost.module.css';

const newPost = (props) => {
    return(
        <div className={classes.newPost}>
            <h1>Add a Post</h1>

            <label>Title</label>
            <input type="text" />

            <label>Content</label>
            <textarea rows="4"/>

            <label>Author</label>
            <select>
                <option value="Tanu">Tanu</option>
                <option value="Manu">Manu</option>
            </select>
            
            <button>Add Post</button>
        </div>
    )
}
export default newPost;