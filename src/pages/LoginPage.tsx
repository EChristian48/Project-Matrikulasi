import * as React from 'react'

import { VerticalContainer } from '../components/VerticalContainer'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

const LoginPage: React.FC = () => {
  const [userField, setUserField] = React.useState('')
  const [passField, setPassField] = React.useState('')

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUserField(e.target.value)
  }

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPassField(e.target.value)
  }

  return (
    <VerticalContainer className='full-screen-height'>
      <Card>
        <Form>
          <Card.Header>Login</Card.Header>

          <Card.Body>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter username'
                onChange={handleUserChange}
                value={userField}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                onChange={handlePassChange}
                value={passField}
              />
            </Form.Group>
          </Card.Body>

          <Card.Footer className='text-center'>
            <Button type='submit'>Login</Button>
          </Card.Footer>
        </Form>
      </Card>
    </VerticalContainer>
  )
}

export { LoginPage }
