import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

// imports for axios and yup
import axios from 'axios'
import * as yup from 'yup'

// importing the registration form
import Registration from './RegistrationForm'

//Default values*******************************************************
const initialFormValues = { 
  /*
 
  //text inputs
  name: '',
  email: '',
  password: '',
 
  //dropdown
  state: '',
 
  //checkbox
  terms: {
    termsAccept: false,
   
  },
  */

  // was told we only need to include username and password by our backend engineer

  ///// TEXT INPUTS /////
  username: '',
  password: '',
}
const initialFormErrors = {
  /*
  name: '',
  email: '',
  password: '',
  state: '',
  */
 username: '',
 password: '',
}

const initialUsers = []
const initialDisabled = true


function App() {
  //slices of State*******************************************************
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  ///// FORM ACTIONS /////
  const inputChange = (name, value) => {
    return null;
  }

  const submit = () => {
    return null;
  }


  //Axios Request*******************************************************
  return (
    <div className="App">
      <Registration 
        values={formValues} inputChange={inputChange} submit={submit} disabled={disabled} errors={formErrors}
      />
      
    </div>
  );
}

export default App;
