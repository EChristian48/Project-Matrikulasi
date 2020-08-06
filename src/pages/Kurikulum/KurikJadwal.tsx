import * as React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const KurikJadwal: React.FC = () => {
  return (
    <Container className='mt-4'>
      <Row>
        <Col sm={2}>
          <List>
            {Array<JSX.Element>(9).fill(<List.Item>Tanggal</List.Item>)}
          </List>
        </Col>
        <Col sm={10}>
          <Table bordered striped hover responsive>
            <thead>
              <tr>
                <th>Jam</th>
                <th>RPL</th>
                <th>TKJ</th>
                <th>MMD</th>
              </tr>
            </thead>
            <tbody>
              {Array<JSX.Element>(9).fill(
                <tr>
                  <td>1</td>
                  <td>190</td>
                  <td>402</td>
                  <td>003</td>
                </tr>
              )}
            </tbody>
          </Table>
          <Row>
            <Col>
              <Button>Edit Jadwal</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export { KurikJadwal }
