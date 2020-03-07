import styled, { createGlobalStyle } from 'styled-components';

export const Playground = createGlobalStyle`
body{
    background: #0575E6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #021B79, #0575E6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #021B79, #0575E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}`;
export const Box = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 20.5%;
& h1{
    color: white
}
`;
export const SuccessButtonStyle = styled.button`
    background-color:green;
    width:160px;
    color:white;
    height: 50px;
    font-size:20px;
    margin-left:23%;
    border-radius:15px;
    margin-bottom:12px;
    &:hover{
        background-color:white;
        color:green
    }
`;

export const ErrorButtonStyle = styled.button`
    background-color:red;
    width:160px;
    color:white;
    height: 50px;
    font-size:20px;
    margin-left:23%;
    border-radius:15px;
    margin-bottom:12px;
    &:hover{
        background-color:white;
        color:red
    }
`;


export const WarningButtonStyle = styled.button`
    background-color:orange;
    width:160px;
    color:white;
    height: 50px;
    font-size:20px;
    margin-left:23%;
    border-radius:15px;
    margin-bottom:12px;
    &:hover{
        background-color:white;
        color:orange
    }
`;
