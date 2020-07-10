import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Comment from '../comment/comment';
import { db } from '../../services/firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/index';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';



class comments extends Component {
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

const mapStateToProps = (state) => {
    const thisTicket =  state.firestore.ordered.tickets;

    let comment = [];

    thisTicket.forEach(a=>{
        if(a.comment && a.time){comment.push(a)
        }
        else(comment=null)
    })

    return {
        commens: comment
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => 
         [{
        collection: 'tickets',
        doc: props.match.params.id,
        subcollections:[{collection: 'comment',
        orderBy: 'time'
    }]
    }]),

)(comments);