import * as React from 'react'

import { Switch, Route } from 'react-router-dom'
import { KurikJadwal } from './KurikJadwal'
import { KurikNavbar } from './KurikNavbar'
import { KurikList } from './KurikList'

type FilesField = {
  name: string
  nomor: number
}

const KurikDashboard: React.FC = () => {
  return (
    <>
      <KurikNavbar />

      <Switch>
        <Route path='/kurikulum/jadwal'>
          <KurikJadwal />
        </Route>

        <Route path='/kurikulum/listguru'>
          <KurikList />
        </Route>
      </Switch>
    </>
  )
}

export { KurikDashboard }
