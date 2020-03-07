import React from 'react';
import WarningButton from './WarningButton';
import ErrorButton from './ErrorButton';
import SuccessButton from './SuccessButton';

const Button = (props) => {
    if (props.type === 'warning')
        return <WarningButton />
    if (props.type === 'error')
        return <ErrorButton />
    if (props.type === 'success')
        return <SuccessButton />
}
export default Button;