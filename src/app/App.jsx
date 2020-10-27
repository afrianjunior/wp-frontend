import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Details = lazy(() => import('./pages/Details'))

const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

const AppStackRoute = withRouter(() => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details" component={Details} />
          </Switch>
        </Container>
      </Suspense>
    </>
  )
})

export default () => (
  <Router>
    <AppStackRoute />
  </Router>
)
