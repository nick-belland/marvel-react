import React from 'react';
import {
  Main,
  Sidebar
} from '../../components';
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
