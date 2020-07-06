import React, {Component} from 'react';
import './App.css';
import Layout from './hoc/layout/Layout';
import Ticketing from './container/Ticketing/Ticketing';
import {Switch, Route, Redirect} from 'react-router-dom';
import FullPost from './component/Tickets/FullPost/FullPost';
import Auth from './container/Auth/Auth';
import Logout from './container/Auth/Logout/Logout';
import {connect} from 'react-redux';

class App extends Component {
render(){

  let routes = (<Switch>
    <Route path='/' exact component={Ticketing}/>
    <Route path='/authenticate' component={Auth} />
    <Redirect to='/'></Redirect>
    </Switch>)

    if(this.props.isAuthenticated){
      routes = <Switch>
      <Route path='/' exact component={Ticketing}/>
      <Route path='/fullPost/:id' exact component={FullPost} />
      <Route path='/logout' component={Logout} />
      <Redirect to='/' ></Redirect>
      </Switch>
    }


  return(
    <div>
      <Layout>
        {routes}
      </Layout>
    </div>
  )
}
}

const mapStateToProps = state => {
  return{
    isAuthenticated: state.auth.userId !== null
  }
}

export default connect(mapStateToProps)(App);
