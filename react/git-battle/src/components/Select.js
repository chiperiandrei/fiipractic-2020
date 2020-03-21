import React, { useState, useEffect } from 'react';
const Select = (props) => {
    const [isOpened, setIsOpened] = useState(false)
    const [selectedOption, ] = useState('N/A')
    const [options, ] = useState(['a', 'b', 'c'])
    const [firstName, ] = useState('Andrei')
    const [, ] = useState('Chiperi')
    const elements = options.map((option) =>
        <li>{option}</li>)
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${options} times`;
    });
    if (!isOpened) {
        const content = <div>
                            <button onClick={() => setIsOpened(!isOpened)}>
                                Show Menu
                            </button>
                            {selectedOption}
                            {firstName}
                        </div>
        return content
    }
    else {
        const content = <div>
                            <ul>
                                {elements}
                            </ul>
                            <button onClick={() => setIsOpened(!isOpened)}>
                                Hide Menu
                            </button>
                        </div>
        return content
    }

}
export default Select;