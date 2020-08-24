import React, { useEffect } from 'react';
import './App.css';
import Login from './components/login/login'
import Register from './components/register/register'
import PrivateRoute from './utils/auth/privateRoute'
import { Route } from 'react-router-dom'
import UserDashboard from './components/user-dashboard/userDashboard';



function App() {
  return (
    <div className="App">
      <PrivateRoute exact path='/' component={UserDashboard}></PrivateRoute>
      <Route path='/login' component={Login}></Route>
      <Route path='/register' component={Register}></Route>
    </div>
  );
}

export default App
