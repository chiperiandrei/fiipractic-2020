import React, { useEffect, useState } from 'react';
import { MainStyle, LeftPanel, RightPanel, Infop1, Infop2, ButtonBattle, WinMessage } from '../assets/styles/Main'
import axios from 'axios';
import unknown from '../assets/img/unknown.jpg';
const DummyContent = (props) => {

    const [usernameFirstPlayer, setUsernameFirstPlayer] = useState('');
    const [usernameSecondPlayer, setUsernameSecondPlayer] = useState('');
    const [firstUserData, setFirstUserdata] = useState(null);
    const [secondUserData, setSecondUserdata] = useState(null);
    const [winMessage, setWinMessage] = useState('');


    useEffect(() => {
        axios.get(`https://api.github.com/users/` + usernameFirstPlayer)
            .then(response => {
                setFirstUserdata(response.data)
                console.log(response.data)
            })
            .catch(err => {
                setFirstUserdata(null)
            })
        axios.get(`https://api.github.com/users/` + usernameSecondPlayer)
            .then(response => {
                setSecondUserdata(response.data)
                console.log(response.data)
            })
            .catch(err => {
                setSecondUserdata(null)
            })
    }, [usernameFirstPlayer, usernameSecondPlayer]);
    const battle = () => {
        if (firstUserData !== null && secondUserData !== null) {
            let x = firstUserData.public_repos - secondUserData.public_repos;
            if (x > 0) {
                setWinMessage(`${firstUserData.login.toUpperCase()} WINS!`)
            }
            else if (x < 0) {
                setWinMessage(`${secondUserData.login.toUpperCase()} WINS!`)

            }
            else {
                setWinMessage("NEXT TIME! DRAW GAME")
            }
        }
        
    }
    return (
        <MainStyle>
            {winMessage !== '' ? <WinMessage>{winMessage}</WinMessage> : null}
            <LeftPanel>
                <h1>FIRST PLAYER</h1>
                <Infop1>
                    <label htmlFor="firstplayer">Type the username for player one</label>
                    <input id="firstplayer" name="firstplayer" value={usernameFirstPlayer} onChange={e => setUsernameFirstPlayer(e.target.value)} ></input>
                    {firstUserData !== null ? <img src={firstUserData.avatar_url} alt="first user avatar" /> : <img src={unknown} alt="unknown" />}
                    {firstUserData !== null ? <h1>He have {firstUserData.public_repos} repos</h1> : ''}

                </Infop1>
            </LeftPanel>
            <RightPanel>
                <h1>SECOND PLAYER</h1>
                <Infop2>
                    <label htmlFor="secondplayer">Type the username for player two</label>
                    <input id="secondplayer" name="secondplayer" value={usernameSecondPlayer} onChange={e => setUsernameSecondPlayer(e.target.value)}></input>
                    {secondUserData !== null ? <img src={secondUserData.avatar_url} alt="first user avatar" /> : <img src={unknown} alt="unknown" />}
                    {secondUserData !== null ? <h1>He have {secondUserData.public_repos} repos</h1> : ''}
                </Infop2>
            </RightPanel>
            <ButtonBattle onClick={battle}>
                BATTLE
            </ButtonBattle>


        </MainStyle>
    )



}
export default DummyContent;