import { useState } from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    email: '',
    password: ''
  });

  const [ validated ] = useState(false);

  const [ showAlert, setShowAlert ] = useState(false);
  const [ addUser ] = useMutation(ADD_USER);
  
  const handleInputChange = ( event ) => {
    const { name, value } = event.target; 

    setUserFormData({
      ...userFormData,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('userFormData', userFormData);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      console.log('attempting signup');
      const { data } = await addUser({
        variables: {
          email: userFormData.email,
          password: userFormData.password
        }
      });
      console.log('after attempting to add  user')
      Auth.login(data.addUser.token);
      window.location.replace('/mitresquare')
    } catch (err) {
      console.log(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: '',
      password: ''
    });

  }

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={()=>setShowAlert(false)} show={showAlert} variant='danger'>
          something went wrong with your signup!
        </Alert>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>e-mail</Form.Label>
          <Form.Control
          type='text'
          placeholder='Your email'
          name='email'
          onChange={handleInputChange}
          value={userFormData.email}
          required
          />
          <Form.Control.Feedback type='invalid'>e-mail is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder= 'Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
          </Button>
      </Form>
    </>
  )
};

export default SignupForm;