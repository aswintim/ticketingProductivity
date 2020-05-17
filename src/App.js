import React from 'react';
import './App.css';
import Layout from './hoc/layout/Layout';
import Ticketing from './container/Ticketing/Ticketing';

function App() {
  return (
    <div>
      <Layout><Ticketing/></Layout>
    </div>
  );
}

export default App;
