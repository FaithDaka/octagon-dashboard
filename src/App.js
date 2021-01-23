import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout';
import Login from './Pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/landing' component={Layout}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;

