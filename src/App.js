import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;


