import * as React from 'react'

import Navbar from 'react-bootstrap/Navbar'

const SuperNavbar: React.FC = () => {
  return (
    <Navbar expand='md' bg='light'>
      <Navbar.Brand href='/#/'>SupervisiMan</Navbar.Brand>
    </Navbar>
  )
}

export { SuperNavbar }
