import React from 'react';
import './App.css';
import Layout from './hoc/layout/Layout';
import Ticketing from './container/Ticketing/Ticketing';
import {Switch, Route} from 'react-router-dom';
import FullPost from './component/Tickets/FullPost/FullPost';
import Auth from './container/Auth/Auth';

function App() {

  return (
    <div>
    
      <Layout>
      <Switch>
        <Route path='/' exact component={Ticketing}/>
        {/* <Route path='/sign-in' component={SignIn}/>
        <Route path='/sign-up' component={SignUp}/> */}
        <Route path='/fullPost/:id' exact component={FullPost} />
        <Route path='/authenticate' component={Auth} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
