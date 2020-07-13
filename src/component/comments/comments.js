import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Comment from '../comment/comment';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import * as actions from '../../store/index';

class comments extends Component {
    // componentDidMount(){
    //     this.props.onGetComment(this.props.match.params.id);
    // }
    render() {
        const camments = this.props.commens && this.props.commens.map(comms => {
            return (
                <div key={comms.comment} style={{ display: 'flex' }}>
                    <Comment usersComment={comms.comment} commentTime={comms.time} /><a href=''>edit</a></div>
            )
        })
        return (
            <Aux>
                {camments}
            </Aux>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('comments000')
    console.log(state);
    const thisTicket =  state.firestore.ordered.tickets;
    let comment = [];

    thisTicket && thisTicket.forEach(a=>{
        if(a.comment && a.time){comment.push(a)
        }
    })

    // console.log('comments1')
    // console.log(comment);
    return {
        // commens: state.comment.getComments
        commens : comment
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onGetComment: (id)=>dispatch(actions.getComments(id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => 
         [{
        collection: 'tickets',
        doc: props.match.params.id,
        subcollections:[{collection: 'comment',
        orderBy: ['time', 'desc']
    }]

    }]),

)(comments);