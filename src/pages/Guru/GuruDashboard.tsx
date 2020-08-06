import * as React from 'react'

import { Switch, Route } from 'react-router-dom'
import { GuruUpload } from './GuruUpload'
import { GuruNavbar } from './GuruNavbar'
import { GuruList } from './GuruList'

type FilesField = {
  name: string
  nomor: number
}

const GuruDashboard: React.FC = () => {
  return (
    <>
      <GuruNavbar />

      <Switch>
        <Route path='/guru/upload'>
          <GuruUpload />
        </Route>

        <Route path='/guru/list'>
          <GuruList />
        </Route>
      </Switch>
    </>
  )
}

export { GuruDashboard }
