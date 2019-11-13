import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import PrivateRoute from './components/PrivateRoute';
import UserList from './components/UserList';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <ul>
          <Link to ='/register'>Register</Link>
          <br />
          <Link to ='/login'>Login</Link>
          <br />
          <Link to ='/users'>Users</Link>
        </ul>

        <Switch>
          <Route exact path = '/' component = { RegisterPage }/>
          <Route path="/login" component={ LoginPage }/>
          <Route path="/register" component={ RegisterPage }/>
          <PrivateRoute path="/protected" component={UserList}/>
          
        </Switch>

      </div>
    </Router>
  );
}

export default App;
