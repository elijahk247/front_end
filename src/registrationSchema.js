// Here goes the schema for the form
import * as yup from 'yup'

const registrationSchema = yup.object().shape({
  /*
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Must include email address'),*/
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Username is Required'),
  password: yup
    .string()
    .min(8, 'The length of the password should be at least 8 characters')
    .required('Password is required'),   // come back and require a special character
})

export default registrationSchema
