import * as React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const GuruList: React.FC = () => {
  return (
    <Container className='mt-4'>
      <Row>
        <Col sm={2}>
          <List>
            {Array<JSX.Element>(9).fill(<List.Item>Tanggal</List.Item>)}
          </List>
        </Col>
        <Col sm={10}>
          {Array<JSX.Element>(3).fill(
            <Card className='my-2'>
              <Card.Header as='h5'>Judul File</Card.Header>
              <Card.Body>
                <Card.Text>Uploaded: Kapan</Card.Text>
                <Button className='mr-2'>Hapus</Button>
                <Button>Ganti File</Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export { GuruList }
