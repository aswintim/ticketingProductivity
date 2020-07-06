import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import commentReducer from './store/reducers/comment';
import newPostReducer from './store/reducers/posts';
import authReducer from './store/reducers/auth';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'; 
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import fbConfig from './services/firebase';


const rootReducer = combineReducers({
  comment: commentReducer,
  posts: newPostReducer,
  auth: authReducer
})
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig)
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
