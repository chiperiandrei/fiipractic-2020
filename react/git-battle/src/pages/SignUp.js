import React from 'react';
import {Playground } from '../assets/styles/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Navigation';
import SignUpform from '../components/SignUpform';
const arr = [['/signin','Sign in'],['/signup','SIGN UP'],['/','Home']];
const SignUp = (props) => {

    return [<Playground />,<Header/>,<Nav elements={arr}/>,<SignUpform/>,<Footer/>]
    
}

export default SignUp;