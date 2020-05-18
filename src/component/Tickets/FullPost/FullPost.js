import React, {Component} from 'react';
import classes from './FullPost.module.css';
import axios from 'axios';


class FullPost extends Component {
    state={
        fullPost: null
    }

  componentDidUpdate(){
      if(this.props.id){
          if(!this.state.fullPost || (this.state.fullPost && this.state.fullPost.id !== this.props.id)){
      axios.get('http://jsonplaceholder.typicode.com/posts/'+this.props.id)
      .then(response=>{ 
        this.setState({fullPost: response.data})
      })
}}}


    render(){
       let post = <p className={classes.fullPost} style={{textAlign: 'center'}}>Please select a post!</p>
       if(this.props.id){
           post = <p className={classes.fullPost} style={{textAlign: 'center'}}>Loading...</p>
       }
        if(this.state.fullPost){
      post =  <div className={classes.fullPost}>
            <h1>{this.state.fullPost.title}</h1>
        <p>{this.state.fullPost.body}</p>
            <a href="/">Delete</a>
        </div>}
        return post;
    
}}
export default FullPost;