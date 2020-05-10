import React, { Suspense } from 'react'
import { Layout, Container } from 'ui'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))
const Details = React.lazy(() => import('./pages/Details'))

export const PublicRoute = props => {
  return (
    <React.Fragment>
      <Container>
        <Route {...props} />
      </Container>
    </React.Fragment>
  )
}

const AppStackRoute = withRouter(() => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading</div>}>
        <Layout>
          <Switch>
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute exact path="/details" component={Details} />
          </Switch>
        </Layout>
      </Suspense>
    </React.Fragment>
  )
})

export default () => (
  <Router>
    <AppStackRoute />
  </Router>
)
