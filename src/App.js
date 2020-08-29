import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1> Something</h1>

        <Header />
        <div className="app__body">
          <Sidebar />
          {/* Sidebar */}
          {/* React-Router -> Chat Screen */}
        </div>
      
    </div>
  );
}

export default App;
