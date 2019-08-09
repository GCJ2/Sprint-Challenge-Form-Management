import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'


const UserForm = ({ values, handleChange, errors, touched, status }) => {

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState()
  console.log('status', status);
  console.log('users', users);

  useEffect(() => {
    if (status) {
      setUsers([...users, status])
    }
  }, [status])


  return(
    <div className="form-div">
      <h1>New User Onboarding</h1>
        <Form className="form-wrapper">
          <div>
            {touched.username && errors.username && <p>{errors.username}</p>}
          <Field type='username' name='username' placeholder='User Name' />
          </div>

          <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type='password' name='password' placeholder='Password' />
          </div>

          <button type="submit">Submit</button>
        </Form>
        <h2>Registered Users</h2>
        {users.map((user, i) => (
        <p key={i}>{user.username}</p>
      ))}
    </div>
    )
}

const FormikUserForm = withFormik({
  mapPropsToValues({ username, password}) {
    return {
      username: username || '',
      password: password || '',
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter a user name'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Please enter a valid password'),
  }),
  handleSubmit(values, { setStatus, resetForm, setErrors, setSubmitting }) {
    console.log(values);
    setStatus(values)
    axios
      .post('http://localhost:5000/api/register', values)
      .then(res => {
        console.log(res);
        // setStatus(res.data)
      })
      .catch(err => console.log(err.response));
  }
})(UserForm)

export default FormikUserForm
