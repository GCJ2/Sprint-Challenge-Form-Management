import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import CurrentUsers from './CurrentUsers'
import CurrentUsersDisplay from './CurrentUsersDisplay'

import NewUsers from './NewUsers'
import { Route } from "react-router-dom";

const UserForm = ({ values, handleChange, errors, touched, status }) => {



  const [users, setUsers] = useState([]);
  const [dbUsers, setDbUsers] = useState()
  // console.log('status', status);
  // console.log('users', users);
  // console.log('dbUsers', dbUsers);


  useEffect(() => {
    if (status) {
      setUsers([...users, status])
    }
  }, [status])

  useEffect(() => {
    axios
    .get('http://localhost:5000/api/restricted/data')
    .then(res => {
      // console.log('res.data', res.data);
      setDbUsers(res.data)
    })
    .catch(err => console.log(err.response));
  }, [])

  if (dbUsers === undefined) {
      return null
  }

  return(
    <div className="form-div">
      <h1>New User Onboarding</h1>
        <Form className="form-wrapper">
          <div>
            {touched.username && errors.username && <p>{errors.username}</p>}
          <Field
            className="form-input" type='username' name='username' placeholder='User Name' />
          </div>
          <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
          <Field
            className="form-input" type='password' name='password' placeholder='Password' />
          </div>
          <button
            className="form-button" type="submit"
            >Submit</button>
        </Form>
      <div className="users">
        <h2>New Users</h2>
        {users.map((user, i) => (
          <NewUsers
            key={i}
            name= {user.username} />
          ))}
      </div>
      <div className="users">
        <h2>Current Users</h2>
        {dbUsers.map((user, i) => (
          <CurrentUsers
            key={i}
            name= {user.name} />
          ))}
      </div>
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
    // console.log(values);
    setStatus(values)
    axios
      .post('http://localhost:5000/api/register', values)
      .then(res => {
        // console.log(res);
        setStatus(res.data)
      })
      .catch(err => console.log(err.response));
  }
})(UserForm)



export default FormikUserForm
