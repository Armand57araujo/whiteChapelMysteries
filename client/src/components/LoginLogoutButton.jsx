import { useState } from 'react';
import { Button, Tab, Nav,  Modal } from 'react-bootstrap';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const LoginLogout = () => {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <>
    {Auth.loggedIn() ? (
      <Button onClick={Auth.logout}>Logout</Button>
    ): (
      <Button variant='dark' onClick={() => setShowModal(true)}>Login/Sign Up</Button>
    )}
    <Modal
      size='lg'
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby='signup-modal'>
      <Tab.Container defaultActiveKey='login'>
        <Modal.Header closeButton>
          <Modal.Title id='signup-modal'>
            <Nav variant='pills'>
              <Nav.Item>
                <Nav.Link eventKey='login'>Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
              </Nav.Item>
            </Nav>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignupForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
      </Tab.Container>
    </Modal> 
    </>
  )
}

export default LoginLogout;