import React from 'react';
import './App.css';
import Layout from './hoc/layout/Layout';
import Ticketing from './container/Ticketing/Ticketing';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';


function App() {

  return (
    <div>
      <BrowserRouter>
      <Layout><Routes/></Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
