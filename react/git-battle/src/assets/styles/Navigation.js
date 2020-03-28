import styled from 'styled-components';
export const NavigationStyle = styled.nav`
    margin:0;
    padding:2.5%;
    list-style: none;
    color: white;
    text-decoration:none;
    position:fixed;
    height:100%;
    left: 0px;
    background-color: red;
    & a{
	background-color:#44c767;
	border-radius:28px;
	border:1px solid #18ab29;
	display:block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
    }
`;
export const ButtonSwitch = styled.button`
background-color:green;
width:160px;
color:white;
height: 50px;
font-size:20px;
border-radius:15px;
margin-bottom:12px;
&:hover{
    background-color:white;
    color:green
}
`;