import React from 'react';
import {Playground } from '../assets/styles/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Navigation';
import MainContent from '../components/MainContent';
const arr = [['/signin','Sign in'],['/signup','SIGN UP'],['/','Home']];
const Home = (props) => {

    return [<Playground />,<Header/>,<Nav elements={arr}/>,<MainContent/>,<Footer/>]
    
}

export default Home;