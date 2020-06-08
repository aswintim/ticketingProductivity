import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import firebase, { auth } from '../../../services/firebase';

class signIn extends Component {
    state = {
        user: null,
        loggedIn: false
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    loggedIn: true,
                    user: {
                        photoURL: user.photoURL,
                        displayName: user.displayName,
                        email: user.email
                    }

                })
            } else {
                this.setState({ user: null })
            }
        })
    }

    loginHandler = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider)
            .then(result => {
                this.setState({ loggedIn: true,
                    user: {
                        photoURL: result.user.photoURL,
                        displayName: result.user.displayName,
                        email: result.user.email
                    }
                })
            }).catch(error => {
                console.log(error);
            })
    }

    signOutHandler=()=>{
        auth.signOut();
        this.setState({loggedIn: false})
    }


    render() {
        return (
            <Aux>
                <h1>Login Page:</h1>
        Google: {this.state.loggedIn ?
                    <div style={{ textAlign: 'center' }}>
                        <img src={this.state.user.photoURL}
                            alt='profile-picture'
                            style={{ borderRadius: '50%', height: '80px' }} />
                        <div>Welcome {this.state.user.displayName}!</div>
                        <button onClick={this.signOutHandler}>Sign Out</button>
            
                    </div> :
                    <button onClick={this.loginHandler}>Login</button>}
            </Aux>
        )
    }
}

export default signIn;
