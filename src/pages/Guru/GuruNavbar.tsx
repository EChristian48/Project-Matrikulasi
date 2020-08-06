import * as React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const GuruNavbar: React.FC = () => {
  return (
    <Navbar expand='md' bg='light'>
      <Navbar.Brand href='/#/'>SupervisiMan</Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav.Link href='/#/guru/upload'>Upload</Nav.Link>
        <Nav.Link href='/#/guru/list'>List Upload</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export { GuruNavbar }
