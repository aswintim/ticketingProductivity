import React, {Component} from 'react';
import Post from '../Post/Post';
// import axios from 'axios';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import {db} from '../../../services/firebase';
import {Route, Link} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import Spinner from '../../UI/Spinner/Spinner';

class Posts extends Component{
    state={
        tickets:null,
        docSelected:null
    }

    componentDidMount(){
        db.collection('tickets').orderBy('time')
        .get()
        .then(snapshot=>{
            const ticks = [];
            snapshot.forEach(doc=>{
                let dat = doc.data();
                ticks.push({...dat, id:doc.id});
            })
            this.setState({tickets:ticks})
            console.log(ticks);
            
        })
        .catch(error=>{console.log(error)})
    }

    postClickHandler=(id)=>{
        this.state.tickets.map((doc)=>{
            if(doc.id === id){
                this.setState({docSelected:doc})
            }
        })
    }

    render(){
        // const posts = this.state.posts.map(res=>{
        //     return <Post key={res.id} title={res.title} author={res.author} fullPostHandler={()=>this.fullPostHandler(res.id)} />   })

        let posts = <Spinner />

         if(this.state.tickets){
           posts = this.state.tickets.map(ticket=>{
                return(
                    <Link to={'/fullPost/'+ticket.id} key={ticket.id} style={{textDecoration: 'none', color: 'black'}}>
                <Post 
                key={ticket.id} 
                title={ticket.title} 
                description={ticket.description} 
                time={ticket.time} 
                fullPostHandler={()=>this.postClickHandler(ticket.id)}/>
                </Link>)
            })
         }



       return(
           <Aux>
               {posts}
           
           </Aux>
       )                  
    
}
}

export default Posts;