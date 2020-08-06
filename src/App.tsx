import * as React from 'react'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

// Pages and Components
import { LoginPage } from './pages/LoginPage'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export { App }
