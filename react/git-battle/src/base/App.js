import React from 'react';
import {Playground } from '../assets/styles/App';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Navigation';

class App extends React.Component {
  render() {
    return [<Playground />,<Header/>,<Nav/>,<Footer/>]
  }
}

export default App;
