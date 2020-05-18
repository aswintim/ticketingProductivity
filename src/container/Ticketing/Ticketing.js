import React, {Component} from 'react';
import classes from './Ticketing.module.css';
import NewPost from '../../component/Tickets/NewPost/NewPost';
import Post from '../../component/Tickets/Post/Post';
import FullPost from '../../component/Tickets/FullPost/FullPost';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import axios from 'axios';

class Ticketing extends Component{
    state={
        posts:[],
        postId: null

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

    fullPostHandler=(id)=>{
        this.setState((prevState)=>{
            return {postId: id}
        })
    }

    render(){
        const posts = this.state.posts.map(res=>{
            return <Post key={res.id} title={res.title} author={res.author} fullPostHandler={()=>this.fullPostHandler(res.id)}/>
        })
        return(
        <Aux>
            <section>
                <NewPost/>
            </section>
            <section className={classes.post}>
                {posts}
            </section>
            <section>
                <FullPost id={this.state.postId}/>
            </section>
        </Aux>
        )
    }
}

export default Ticketing;