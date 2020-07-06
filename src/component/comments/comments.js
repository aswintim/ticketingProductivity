import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Comment from '../comment/comment';
import {db} from '../../services/firebase';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/index';


class comments extends Component{
    // state={
    //     commens : null
    // }

    componentDidMount(){
        this.props.onGetComments(this.props.match.params.id);
        // db.collection('tickets')
        // .doc(this.props.match.params.id)
        // .collection('comment')
        // .orderBy('time', 'desc')
        // .get().then(snapshot=>{
        //     const comms = [];
        //     snapshot.forEach(doc=>{
        //         let com = doc.data();
        //         comms.push(com);
        //     })
        //     this.setState({commens:comms})
        // })

    }


    render(){
        const camments = this.props.commens && this.props.commens.map(comms=>{
            return(
                <div key={comms.comment} style={{display: 'flex'}}>
                <Comment usersComment={comms.comment} commentTime={comms.time}/><a href=''>edit</a></div>
            )
        })
        return(
            <Aux>
               {camments}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return{
        commens: state.comment.getComments
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onGetComments: (id)=>dispatch(actions.getComments(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(comments));