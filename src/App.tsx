import * as React from 'react'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

// Pages and Components
import { LoginPage } from './pages/LoginPage'
import { GuruDashboard } from './pages/Guru/GuruDashboard'
import { SuperDashboard } from './pages/Supervisor/SuperDashboard'
import { KurikDashboard } from './pages/Kurikulum/KurikDashboard'
import { KepsekDashboard } from './pages/Kepsek/KepsekDashboard'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/guru'>
          <GuruDashboard />
        </Route>

        <Route path='/supervisor'>
          <SuperDashboard />
        </Route>

        <Route path='/kurikulum'>
          <KurikDashboard />
        </Route>

        <Route path='/kepsek'>
          <KepsekDashboard />
        </Route>

        <Route path='/'>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export { App }
