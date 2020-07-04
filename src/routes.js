import React from 'react';
import {Route,Switch} from 'react-router-dom';
import FullPost from './component/Tickets/FullPost/FullPost';
import Ticketing from './container/Ticketing/Ticketing';
import Aux from './hoc/Auxiliary/Auxiliary';
// import SignIn from './component/Logins/SignIn/SignIn';
// import SignUp from './component/Logins/SignUp/SignUp';

const routes = (props) =>{
return(
    <Aux>
        <Switch>
        <Route path='/' exact component={Ticketing}/>
        {/* <Route path='/sign-in' component={SignIn}/>
        <Route path='/sign-up' component={SignUp}/> */}
        <Route path='/fullPost/:id' exact component={FullPost} />
        </Switch>

    </Aux>
)

}

export default routes;
