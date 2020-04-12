import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Battle from '../pages/Battle';

class App extends React.Component {
  
  render() {
    return <Router>
      <Switch>
        <Route exact path="/">
          <Battle/>
        </Route>
      </Switch>
    </Router>
  }
}

export default App;
