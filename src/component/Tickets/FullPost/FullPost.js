import React, {Component} from 'react';
import classes from './FullPost.module.css';
import moment from 'moment';
import Comments from '../../comments/comments';
import CommentBox from '../../commentBox/commentBox';
import cx from 'classnames';
import Spinner from '../../UI/Spinner/Spinner';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';


class FullPost extends Component {
    state={
        fullPost: null
    }

// componentDidMount(){
//     var docRef = db.collection('tickets').doc(this.props.match.params.id);
//     docRef.get().then(doc=>{
//         if(doc.exists){
//             this.setState({fullPost: doc.data()})
//             console.log(this.state.fullPost.comment)
//         }else{
//             console.log("No such document found!");
//         }
//     }).catch(err=>{
//         console.log(err);
//     })
    
// }

render(){
let posts = <Spinner />

if(this.props.fullPost){
posts = <div><h1>{this.props.fullPost.title}</h1>
<p>Description: {this.props.fullPost.description}</p>
<p>Created Date: {moment(this.props.fullPost.time.toDate()).calendar()}</p>

</div>
}
    return(

        
        <div className={classes.fullPost}>
            {posts}
           <div className={classes.crossOut}><button className={cx(classes.aced, classes.button)}>Aced It!</button>
            <button className={cx(classes.failed, classes.button)}>Failed It!</button></div> 
            <CommentBox />
            <Comments {...this.props}/>
        </div>
    )
}}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const tickets = state.firestore.data.tickets;
    const ticket = tickets ? tickets[id] : null;       //why condition
    return{
        fullPost: ticket
    }
}

export default compose(
connect(mapStateToProps),
firestoreConnect([
    {collection: 'tickets'
}
])

)(FullPost);