import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main'
import Categories from '../pages/categories'
import Categorie from '../pages/categorie'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/categories' component={Categories} />
      <Route path='/categories/:id' component={Categorie} /> 
    </Switch>
  </BrowserRouter>
)

export default Routes;