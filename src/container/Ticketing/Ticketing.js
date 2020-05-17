import React, {Component} from 'react';
import classes from './Ticketing.module.css';
import NewPost from '../../component/Tickets/NewPost/NewPost';
import Post from '../../component/Tickets/Post/Post';
import FullPost from '../../component/Tickets/FullPost/FullPost';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Ticketing extends Component{
    render(){
        return(
        <Aux>
            <section>
                <NewPost/>
            </section>
            <section>
                <Post/>
            </section>
            <section>
                <FullPost/>
            </section>
        </Aux>
        )
    }
}

export default Ticketing;