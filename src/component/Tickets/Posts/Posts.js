import React, {Component} from 'react';
import Post from '../Post/Post';
// import axios from 'axios';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
// import {db} from '../../../services/firebase';
import {Link} from 'react-router-dom';
// import FullPost from '../FullPost/FullPost';
import Spinner from '../../UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actions from '../../../store/index';

class Posts extends Component{
    state={
        // tickets:null,
        docSelected:null
    }

    componentDidMount(){
        this.props.onInitPosts();
    }

    postClickHandler=(id)=>{
        this.props.tickets.map((doc)=>{
            if(doc.id === id){
                this.setState({docSelected:doc})
            }
        })
    }

    render(){
        // const posts = this.state.posts.map(res=>{
        //     return <Post key={res.id} title={res.title} author={res.author} fullPostHandler={()=>this.fullPostHandler(res.id)} />   })

        let posts = <Spinner />

         if(this.props.tickets){
           posts = this.props.tickets.map(ticket=>{
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

const mapStateToProps = state => {
    return{
        tickets: state.posts.tickets
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onInitPosts: () => dispatch(actions.initPosts())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Posts);