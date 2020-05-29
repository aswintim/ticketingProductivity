import React from 'react';
import {Route, Link, Redirect} from 'react-router-dom';
import FullPost from './component/Tickets/FullPost/FullPost';
import Ticketing from './container/Ticketing/Ticketing';
import Aux from './hoc/Auxiliary/Auxiliary';
import SignIn from './component/Logins/SignIn/SignIn';
import SignUp from './component/Logins/SignUp/SignUp';

const routes = (props) =>{
return(
    <Aux>
        <Route path='/' exact component={Ticketing}/>
        <Route path='/sign-in' component={SignIn}/>
        <Route path='/sign-up' component={SignUp}/>

    </Aux>
)

}

export default routes;
