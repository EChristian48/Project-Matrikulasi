import * as React from 'react'

import { VerticalContainer } from '../components/VerticalContainer'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'

import { accounts, Roles } from '../mockup_data/accounts'

import { Redirect } from 'react-router-dom'

type LoggedIn = [boolean, Roles]

const LoginPage: React.FC = () => {
  const [userField, setUserField] = React.useState('')
  const [passField, setPassField] = React.useState('')
  const [failedLogin, setFailedLogin] = React.useState(false)
  const [loggedIn, setLoggedIn] = React.useState<LoggedIn>([false, undefined])

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUserField(e.target.value)
  }

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPassField(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()

    const matched = accounts.find(
      ({ username, password }) =>
        username === userField && password === passField
    )

    if (matched) {
      setLoggedIn([true, matched.role])
    } else {
      setFailedLogin(true)
    }
  }

  return (
    <>
      <Modal show={failedLogin} onHide={() => setFailedLogin(false)}>
        <Modal.Body>Gagal Login.</Modal.Body>
      </Modal>

      <VerticalContainer className='full-screen-height'>
        <Card>
          <Form onSubmit={onSubmit}>
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

      {loggedIn[0] && <Redirect to={loggedIn[1] as string} />}
    </>
  )
}

export { LoginPage }
