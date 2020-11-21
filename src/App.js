import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import login from './pages/login';
import register from './pages/register';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/login' from component = {login} />
        <Route exact path = '/register' from component = {register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
