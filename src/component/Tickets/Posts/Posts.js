import React, {Component} from 'react';
import Post from '../Post/Post';
import axios from 'axios';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import {db} from '../../../services/firebase';

class Posts extends Component{
    state={
        tickets:null
    }

    componentDidMount(){
        db.collection('tickets').orderBy('time')
        .get()
        .then(snapshot=>{
            const ticks = [];
            snapshot.forEach(doc=>{
                ticks.push(doc.data());
            })
            this.setState({tickets:ticks})
        })
        .catch(error=>{console.log(error)})
    }

    render(){
        // const posts = this.state.posts.map(res=>{
        //     return <Post key={res.id} title={res.title} author={res.author} fullPostHandler={()=>this.fullPostHandler(res.id)} />   })

        const posts = this.state.tickets && this.state.tickets.map(ticket=>{
            return(<Post key={ticket.id} title={ticket.title} description={ticket.description} time={ticket.time}/>)
        })
       return(
           <Aux>{posts}</Aux>
       )                  
    
}
}

export default Posts;