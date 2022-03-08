import React from 'react';
import './styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout />   
      </BrowserRouter>
    </div>
  );
}

export default App;
