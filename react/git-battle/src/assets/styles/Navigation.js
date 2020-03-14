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
    & ul{
        list-style: georgian;
    }
    & li{
        padding:20px;
    }
`;