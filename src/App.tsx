import * as React from 'react'

// React Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Pages and Components
import './pages/LoginPage'

const App: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col sm={6} className='bg-primary'>
          ASDUASDIU
        </Col>
        <Col sm={6}></Col>
      </Row>
    </Container>
  )
}

export { App }
