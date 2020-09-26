import React, { Component } from 'react';
import Post from '../Post/Post';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { Link } from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Posts extends Component {
    state = {
        docSelected: null
    }

    postClickHandler = (id) => {
        this.props.tickets.map((doc) => {
            if (doc.id === id) {
                this.setState({ docSelected: doc })
            }
        })
    }

    render() {
        let posts = <Spinner />

        if (this.props.tickets) {
            posts = this.props.tickets.map(ticket => {
                return (
                    <Link to={'/fullPost/' + ticket.id} key={ticket.id} style={{ textDecoration: 'none', color: 'black' }}>
                        <Post
                            key={ticket.id}
                            title={ticket.title}
                            description={ticket.description}
                            time={ticket.time}
                            fullPostHandler={() => this.postClickHandler(ticket.id)} />
                    </Link>)
            })
        }



        return (
            <Aux>
                {posts}
            </Aux>
        )

    }
}


const mapStateToProps = state => {
    // console.log('posts')
    // console.log(state.firestore.ordered.tickets)
    return {
        tickets: state.firestore.ordered.tickets,
        authId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props=> [
        {
            collection: 'tickets',
            where:["userId","==", props.authId],
            // orderBy: ['time', 'asc']
        }
    ])
)(Posts);