import * as React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const KurikNavbar: React.FC = () => {
  return (
    <Navbar expand='md' bg='light'>
      <Navbar.Brand href='/#/'>SupervisiMan</Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav.Link href='/#/kurikulum/jadwal'>Jadwal</Nav.Link>
        <Nav.Link href='/#/kurikulum/listguru'>List Guru</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export { KurikNavbar }
