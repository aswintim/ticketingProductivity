import React, {Component} from 'react';
import classes from './Ticketing.module.css';
import NewPost from '../../component/Tickets/NewPost/NewPost';
// import Post from '../../component/Tickets/Post/Post';
// import FullPost from '../../component/Tickets/FullPost/FullPost';
import Aux from '../../hoc/Auxiliary/Auxiliary';
// import axios from 'axios';
import Modal from '../../component/UI/Modal/Modal';
import Posts from '../../component/Tickets/Posts/Posts';

class Ticketing extends Component{
    state={
        newPostModalShow: false

    }

    // fullPostHandler=(id)=>{
    //     this.setState((prevState)=>{
    //         return {postId: id}
    //     })
    // }

    newPostHandler=()=>{
        this.setState({newPostModalShow:true})
    }

    removeModalHandler=()=>{
        this.setState({newPostModalShow: false})
    }

    
    render(){

        return(
        <Aux>
            <section className="newButton" style={{textAlign: 'center'}}>
                <button className={classes.newPostButton} onClick={this.newPostHandler}>New Post</button>
                <Modal modalShow={this.state.newPostModalShow} removeModalHandler={this.removeModalHandler}>
                    <NewPost removeModalHandler={this.removeModalHandler}/>
                </Modal>

            </section>
            <section className={classes.post}>
                <Posts/>
            </section>

        


            {/* <setion>
                <FullPost id={this.state.postId}/>
            </section> */}
        </Aux>
        )
    }
}


export default Ticketing;