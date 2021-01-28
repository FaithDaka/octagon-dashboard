import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout';
import AddCase from './Pages/Cases/AddCase';
import CaseTable from './Pages/Cases/CaseTable';
import Login from './Pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/landing' component={Layout}/>
        <Route exact path='/add_case' component={AddCase}/>
        <Route exact path='/cases' component={CaseTable}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;

