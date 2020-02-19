import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up-page.component'

import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/signin' component={SignInSignUpPage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
