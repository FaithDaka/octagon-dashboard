import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddCase from './Pages/Cases/AddCase';
import CaseTable from './Pages/Cases/CaseTable';
import UpdateCase from './Pages/Cases/UpdateCase';
import ClientTable from './Pages/Clients';
import ClientProfile from './Pages/Clients/ClientProfile';
import Company from './Pages/Clients/Company';
import Individual from './Pages/Clients/Individual';
import DashboardPage from './Pages/Dashboard';
import Login from './Pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/landing' component={DashboardPage}/>
        <Route exact path='/clients' component={ClientTable}/>
        <Route exact path='/cases' component={CaseTable}/>
        <Route exact path='/cases/add' component={AddCase}/>
        <Route exact path='/cases/update/:id' component={UpdateCase}/>
        <Route exact path='/clients/add/individual' component={Individual}/>
        <Route exact path='/clients/add/company' component={Company}/>
        <Route exact path='/client/:id' component={ClientProfile}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;

