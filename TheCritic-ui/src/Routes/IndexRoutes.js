import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import PrivateRoutes from './PrivateRoutes'
import { Provider } from 'react-redux'
import Store from '../redux/Store'

const IndexRoutes = () => {
  return (
      <Provider store={Store}>
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/*' component={PrivateRoutes}/>
      </Switch>
      </Provider>
  )
}

export default IndexRoutes