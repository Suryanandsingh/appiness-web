import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import PrivateRoute from './privateRoute';
import LoginPage from './Component/Authentication/login';
import Dashboard from './Component/Dashboard/employeeList';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
