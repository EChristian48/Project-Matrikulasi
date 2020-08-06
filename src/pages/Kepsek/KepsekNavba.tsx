import * as React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const KepsekNavbar: React.FC = () => {
  return (
    <Navbar expand='md' bg='light'>
      <Navbar.Brand href='/#/'>SupervisiMan</Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav.Link href='/#/kepsek/jadwal'>Jadwal</Nav.Link>
        <Nav.Link href='/#/kepsek/listguru'>List Guru</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export { KepsekNavbar }
