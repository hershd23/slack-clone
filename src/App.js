import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Router>
          <h1> Something</h1>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="">
                <h1>Welcome</h1>
              </Route>
            </Switch>
            {/* React-Router -> Chat Screen */}
          </div>
      </Router>   
    </div>
  );
}

export default App;
