import React, {Component} from 'react';
import classes from './FullPost.module.css';
import {db} from '../../../services/firebase';
import moment from 'moment';
import Comments from '../../comments/comments';
import CommentBox from '../../commentBox/commentBox';



class FullPost extends Component {
    state={
        fullPost: null
    }

componentDidMount(){
    var docRef = db.collection('tickets').doc(this.props.match.params.id);
    docRef.get().then(doc=>{
        if(doc.exists){
            this.setState({fullPost: doc.data()})
            console.log(this.state.fullPost.comment)
        }else{
            console.log("No such document found!");
        }
    }).catch(err=>{
        console.log(err);
    })
    
}

render(){
let posts = "Nothing is here!! :(";

if(this.state.fullPost){
posts = <div><h1>{this.state.fullPost.title}</h1>
<p>Description: {this.state.fullPost.description}</p>
<p>Created Date: {moment(this.state.fullPost.time.toDate()).calendar()}</p>

</div>
}
    return(

        
        <div className={classes.fullPost}>
            {posts}
            <CommentBox />
            <Comments />
        </div>
    )
}

}
export default FullPost;