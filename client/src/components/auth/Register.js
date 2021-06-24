import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Form } from 'react-bootstrap';

const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({ email: '', password: '', name: '', image: '', passwordConfirmation: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.passwordConfirmation) {
      handleRegister(user, history)
      setUser({ email: '', password: '', name: '', image: '', passwordConfirmation: '' })
    } else {
      alert("Passwords do not match")
    }
  }

  return (
    <>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter name" 
            name="name"
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter image url" 
            name="image"
            value={user.image}
            onChange={(e) => setUser({...user, image: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            name="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            name="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordConfirmation">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password Confirmation" 
            name="passwordConfirmation"
            value={user.passwordConfirmation}
            onChange={(e) => setUser({...user, passwordConfirmation: e.target.value})}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => <Register {...props} {...auth} />}
  </AuthConsumer>
)

export default ConnectedRegister;