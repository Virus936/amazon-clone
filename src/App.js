import React from 'react';
import './App.css';
import { BrowserRouter as Router,Link, Switch, Route } from 'react-router-dom';
import Header from './components/Header'

function App() {
  return (
    <>
      <Router>
      <Header />
        <div className="App">
          <h1>Mon clone amazon</h1>
          <Switch>
            <Route exact path="/">
              <h2>Accueil</h2>
              <Link to='/login'>
                <p>login</p>
              </Link>
            </Route>
            <Route path="/login">
              <h2>Login </h2>
              <Link to='/'>
                <p>home</p>
              </Link>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;


