import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import ChallengeOne from './components/ChallengeOne';
import ChallengeTwo from './components/ChallengeTwo';
import ChallengeThree from './components/ChallengeThree';
import Navigations from './components/Navigations';

import './App.css';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigations />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/ChallengeOne' component={ChallengeOne} />
          <Route path='/ChallengeTwo' component={ChallengeTwo} />
          <Route path='/ChallengeThree' component={ChallengeThree} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
