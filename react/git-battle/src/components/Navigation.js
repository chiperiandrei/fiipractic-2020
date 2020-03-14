import React, { useState } from 'react';
import { NavigationStyle } from '../assets/styles/Navigation';
const Nav = (props) => {
    const [toggle, setToggle] = useState(false)
    const listItems = props.elements.map((option) =>
        <li>{option}</li>
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