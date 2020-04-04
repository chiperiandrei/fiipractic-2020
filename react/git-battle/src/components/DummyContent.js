import React, { useEffect, useState } from 'react';
import { MainStyle, Button, FormData } from '../assets/styles/Main'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';
import { toggleLogged } from '../actions/toggleLogged';
import { addUser, removeUser } from '../actions/userActions';
//
const DummyContent = (props) => {
    const counter = useSelector(state => state.counter);
    const log_value = useSelector(state => state.logged);
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');


    // async function fetchData() {
    //     const res = await fetch("https://jsonblob.com/api/jsonBlob/6a9a9c35-7675-11ea-84c8-0d1cfd869f81");
    //     res
    //         .json()
    //         .then((res) => {
    //             setData(res)
    //         })
    //         .catch(err => console.log(err));
    // }
    useEffect(() => {

    }, [firstName,lastName,location]);


    const incrementButtonHandle = () => {
        dispatch(increment())
    }
    const decrementButtonHandle = () => {
        dispatch(decrement())

    }
    const toggleLog = () => {
        dispatch(toggleLogged())
    }
    const addUserToREDUX = () => {
        const user = {
            firstName: firstName,
            lastName: lastName,
            location: location,
        }
        dispatch(addUser(user))
        setFirstName('')
        setLastName('')
        setLocation('')
        
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLocation = (e) => {
        setLocation(e.target.value)
    }
    return (
        <MainStyle>
            <p>{counter}</p>
            {log_value === true ? <p>true</p> : <p>false</p>}

            <Button onClick={incrementButtonHandle}>+</Button>
            <Button onClick={decrementButtonHandle}>-</Button>
            <Button onClick={toggleLog}>TOGGLE</Button>
            <FormData>
                Prenume<input onChange={handleLastName} value={lastName}/>
                Nume<input onChange={handleFirstName} value={firstName}/>
                Locatie<input onChange={handleLocation} value={location}/>
                <Button onClick={addUserToREDUX}>Adauga</Button>
            </FormData>
            {users.length > 0 ? users.map(x => { return <ul><li>{x.lastName}</li><li>{x.firstName}</li><li>{x.location}</li></ul> }) : null}

        </MainStyle>
    )



}
export default DummyContent;