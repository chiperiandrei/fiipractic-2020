import React, { useState } from 'react';
import { NavigationStyle } from '../assets/styles/Navigation';
import {Link} from 'react-router-dom';
const Nav = (props) => {
    const [toggle, setToggle] = useState(false)
    const listItems = props.elements.map((option) =>
        <Link to={option[0]}>{option[1]}</Link>
    );
    if (!toggle) {
        return (
            <button onClick={() => setToggle(!toggle)}>
                Show Menu
            </button>
        )
    }
    else {
        return (<NavigationStyle><ul>{listItems}</ul>
                    <button onClick={() => setToggle(!toggle)}>
                        Hide Menu
                    </button></NavigationStyle>)
    }

}
export default Nav;