import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import MainContent from '../pages/Home';
class App extends React.Component {
  
  render() {
    return <Router>
      <Switch>
        <Route exact path="/signin">
          <SignIn/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
        <Route exact path="/">
          <MainContent/>
        </Route>
      </Switch>
    </Router>
  }
}

export default App;
