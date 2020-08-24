import React from 'react';
import './App.css';

//Default values*******************************************************
const initialFormValues = { 
 
  //text inputs
  name: '',
  email: '',
  password: '',
 
  //dropdown
  state: '',
 
  //checkbox
  terms: {
  termaccept: false,
   
  },
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  state: '',
}

const initialUsers = []
const initialDisabled = true

//slices of State*******************************************************
const [users, setUsers] = useState()
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled) 


//Axios Request*******************************************************


function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
