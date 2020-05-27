import React, {Component} from 'react';
import Post from '../Post/Post';
import axios from 'axios';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import {db} from '../../../services/firebase';

class Posts extends Component{
    state={
        posts:[],
        postId:null
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const sliced = response.data.slice(0,4);
            const transformed= sliced.map(res=>{
                return {...res, author: 'Timalsina'}
            })
            this.setState({posts: transformed})
        })
    }

    render(){
        const posts = this.state.posts.map(res=>{
            return <Post key={res.id} title={res.title} author={res.author} fullPostHandler={()=>this.fullPostHandler(res.id)} />   })
       return(
           <Aux>{posts}</Aux>
       )                  
    
}
}

export default Posts;