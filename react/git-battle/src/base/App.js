import React from 'react';
import {Playground } from '../assets/styles/App';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Nav from '../components/Navigation';
const arr = ['Menu list 1','Menu list 2','Menu list 3','Menu list 4'];
class App extends React.Component {
  
  render() {
    return [<Playground />,<Header/>,<Nav elements={arr}/>,<Main/>,<Footer/>]
  }
}

export default App;
