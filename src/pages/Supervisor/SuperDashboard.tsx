import * as React from 'react'

import { SuperNavbar } from './SuperNavbar'
import { SuperList } from './SuperList'

type FilesField = {
  name: string
  nomor: number
}

const SuperDashboard: React.FC = () => {
  return (
    <>
      <SuperNavbar />
      <SuperList />
    </>
  )
}

export { SuperDashboard }
