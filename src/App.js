import React from 'react';
import './App.css';
import { BrowserRouter as Router,Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" />
          </Switch>
        </div>
      </Router>
  );
}

export default App;


