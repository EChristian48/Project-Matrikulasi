import * as React from 'react'

import { Switch, Route } from 'react-router-dom'
import { KepsekJadwal } from './KepsekJadwal'
import { KepsekNavbar } from './KepsekNavba'
import { KepsekList } from './KepsekList'

type FilesField = {
  name: string
  nomor: number
}

const KepsekDashboard: React.FC = () => {
  return (
    <>
      <KepsekNavbar />

      <Switch>
        <Route path='/kepsek/jadwal'>
          <KepsekJadwal />
        </Route>

        <Route path='/kepsek/listguru'>
          <KepsekList />
        </Route>
      </Switch>
    </>
  )
}

export { KepsekDashboard }
