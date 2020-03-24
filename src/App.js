import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up-page.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions';
import { useDispatch, useSelector } from 'react-redux';

import { Route, Switch, Redirect } from 'react-router-dom'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async userAuth => {  //we need to unsubscribe when componentWillUnmount
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        dispatch(setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        }));
      });
    } else {
      dispatch(setCurrentUser(userAuth))  // set currentUser to null
    }
  })
  return () => {unsubscribe();}
  }, []
  );

  const currentUser = useSelector(state => state.user.currentUser);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : <SignInSignUpPage/>}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
