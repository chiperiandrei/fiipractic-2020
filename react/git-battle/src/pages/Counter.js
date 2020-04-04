import React from 'react';
import {Playground } from '../assets/styles/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Navigation';
import DummyContent from '../components/DummyContent';
const arr = [['/signin','Sign in'],['/signup','SIGN UP'],['/','Home'],['/counter','Counter']];
const Counter = (props) => {

    return [<Playground />,<Header/>,<Nav elements={arr}/>,<DummyContent/>,<Footer/>]
    
}

export default Counter;