import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Favorites from '../components/Favorites/Favorites';
import Home from '../components/Home/Home';
import Movies from '../components/Movies/Movies';
import TvShows from '../components/TvShows/TvShows.jsx'
import Navbar from "../commons/navbar/Navbar";
import Users from '../components/Users/Users';
const PrivateRoutes = ({history}) => {

  return (
    <div>
      <Navbar history={history}/>{/* // aca le estoy pasando hystory ocmo prop */}
    <Switch>
  <Route path='/home' component={Home}/>
  <Route path='/favorites' component={Favorites}/>
  <Route path='/movies' component={Movies}/>
  <Route path='/tv_shows' component={TvShows}/>
  <Route path='/users' component={Users}/>
  <Redirect from='/*' to={'/home'} />
</Switch>
    </div>
  )
}

export default PrivateRoutes