import * as React from 'react'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

// Pages and Components
import { LoginPage } from './pages/LoginPage'
import { GuruDashboard } from './pages/Guru/GuruDashboard'
import { SuperDashboard } from './pages/Supervisor/SuperDashboard'

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

        <Route path='/kurikulum'>Kurikulum</Route>

        <Route path='/kepsek'>Kepsek</Route>

        <Route path='/'>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export { App }
