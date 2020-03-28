import React from 'react';
import {MainStyle} from '../assets/styles/Main'
import Modal from './Modal';
const SignInform = (props) => {
    const content = `GitHub, Inc. is a US-based global company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for US$7.5 billion.[3] It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.[4]

    GitHub offers plans free of charge, and professional and enterprise accounts.[5] Free GitHub accounts are commonly used to host open source projects.[6] As of January 2019, GitHub offers unlimited private repositories to all plans, including free accounts.[7] As of January 2020, GitHub reports having over 40 million users[8] and more than 100 million repositories[9] (including at least 28 million public repositories),[10] making it the largest host of source code in the world.[11]`;
    
    
    return (
    <MainStyle>{content}</MainStyle>,
    <Modal titlemodal="Sign In FORM">{()=>{
        return <div>
            <h1>Sign in page</h1>
            Email <input value="Email"/>
            Parola <input value="Parola"/>

            </div>
    }}</Modal>)
}
export default SignInform;