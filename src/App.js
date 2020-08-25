import React, { useEffect } from 'react';
import './App.css';
import Login from './components/login/login'
import Register from './components/register/register'
import PrivateRoute from './utils/auth/privateRoute'
import { Route } from 'react-router-dom'
import UserDashboard from './components/user-dashboard/userDashboard';
import Navbar from './components/navbar/navbar'
import { checkIfUserIsLoggedIn } from './redux/actions'
import { useDispatch } from 'react-redux'
import StrainsPage from './components/strains-page/strainsPage'


function App() {

  // Check if user is logged in
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkIfUserIsLoggedIn())
  }, [])
  return (
    <div className="App">
      <Route path='/' component={Navbar}></Route>
      <PrivateRoute exact path='/' component={UserDashboard}></PrivateRoute>

      <Route path='/strains' component={StrainsPage}></Route>

      <Route path='/login' component={Login}></Route>
      <Route path='/register' component={Register}></Route>
    </div>
  );
}

export default App
