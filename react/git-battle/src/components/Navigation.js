import React, { useState } from 'react';
import { NavigationStyle, ButtonSwitch } from '../assets/styles/Navigation';
import { Link } from 'react-router-dom';
const Nav = (props) => {
    const [toggle, setToggle] = useState(false)
    const listItems = props.elements.map((option) =>
        <Link to={option[0]}>{option[1]}</Link>
    );
    if (!toggle) {
        return (
            <NavigationStyle>
                <ButtonSwitch onClick={() => setToggle(!toggle)}>
                    Show Menu
                </ButtonSwitch>
            </NavigationStyle>

        )
    }
    else {
        return (
            <NavigationStyle><ul>{listItems}</ul>
                <ButtonSwitch onClick={() => setToggle(!toggle)}>
                    Hide Menu
                    </ButtonSwitch>
            </NavigationStyle>)
    }

}
export default Nav;