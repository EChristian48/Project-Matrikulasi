import * as React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

type FilesField = {
  name: string
  nomor: number
}

const GuruUpload: React.FC = () => {
  const [clickedTambah, setClickedTambah] = React.useState(0)
  const [filesFields, setFilesFields] = React.useState<FilesField[]>([
    { name: `file${clickedTambah}`, nomor: clickedTambah },
  ])

  const filesFieldsJSX = filesFields.map(fileField => {
    return (
      <Form.Group as={Row} key={fileField.nomor}>
        <Form.Label column sm={12} md={2}>
          {fileField.name}
        </Form.Label>

        <Col sm={8} md={8} className='mb-2'>
          <Form.File />
        </Col>

        <Col sm={4} md={2}>
          <Button
            block
            onClick={() => {
              setFilesFields(
                filesFields.filter(
                  fileFieldFilter => fileFieldFilter.nomor !== fileField.nomor
                )
              )
            }}
          >
            Hapus
          </Button>
        </Col>
      </Form.Group>
    )
  })

  const tambahFile = () => {
    setClickedTambah(clickedTambah + 1)
    setFilesFields([
      ...filesFields,
      { name: `file${clickedTambah + 1}`, nomor: clickedTambah + 1 },
    ])
  }

  return (
    <>
      <Container className='mt-4'>
        <h1 className='text-center mb-4'>Upload file</h1>

        <Row>
          <Col>
            <Form>
              <Form.Group as={Row}>
                <Form.Label column sm={12} md={2}>
                  Tanggal
                </Form.Label>

                <Col sm={12} md={10}>
                  <Form.Control type='date' />
                </Col>
              </Form.Group>

              {filesFieldsJSX}
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button onClick={tambahFile}>Tambah</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export { GuruUpload }
