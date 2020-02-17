import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom'

const HatsPage  = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const TopicList  = () => (
  <div>
    <h1>TOPIC LIST PAGE</h1>
  </div>
);

const TopicDetail  = () => (
  <div>
    <h1>TOPIC DETAIL PAGE</h1>
  </div>
);


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatsPage}/>
        <Route exact path='/hats/:hatNumber' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
