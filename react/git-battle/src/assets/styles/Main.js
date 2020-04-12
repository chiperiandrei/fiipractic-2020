import styled from 'styled-components';
export const MainStyle = styled.div`
color: white;
position: fixed;
height: 100%;
width:100%;
display: flex;`;
export const Button = styled.button`
box-shadow: 3px 4px 0px 0px #1564ad;
	background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
	background-color:#79bbff;
	border-radius:5px;
	border:1px solid #337bc4;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	font-weight:bold;
	padding:12px 44px;
	text-decoration:none;
	text-shadow:0px 1px 0px #528ecc;`;


export const FormData = styled.div`
display: grid;
justify-content: center;
float:left;`;
export const LeftPanel = styled.div`
height:100%;
flex:1;
background-color:white;
color: black;
text-align: center;
& 
img{
	width: 150px;
	height:150px;
	margin-left: 75px;
}
`;
export const RightPanel = styled.div`
height:100%;
flex:1;
background-color:black;
color:white;
text-align: center;`;
export const Infop1 = styled.div`
display:grid;
grid-row-gap:70px;
justify-content:center;
font-size: 20px;
	&
	input{
		padding: 20px 2px;
		border: 2px solid black;
		font-size: larger;
			font-weight:bold;
	}
	& 
img{
	width: 150px;
	height:150px;
	margin-left: 75px;
}`;
export const Infop2 = styled.div`
	display:grid;
	grid-row-gap:70px;
	justify-content:center;
	font-size: 20px;
		&
		input{
			padding: 20px 2px;
			border: 2px solid white;
			font-size: larger;
			font-weight:bold;
		}
		& 
img{
	width: 150px;
	height:150px;
	margin-left: 75px;
}`;

export const ButtonBattle = styled.button`
position: absolute;
    bottom: 30%;
    left: 46%;
	font-family: 'Fredoka One', cursive;
    width: 8%;
    font-size: xx-large;
    height: 7%;
	background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(215,215,215,1) 50%, rgba(255,255,255,1) 50%);
color: #ff4545;
font-weight: bold;
`;
export const WinMessage=styled.h1`
font-size: 91px;
    color: #ff4545;
    position: absolute;
    left: 25%;
    top: 14%;`;