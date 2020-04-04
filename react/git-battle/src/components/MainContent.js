import React, { useEffect, useState } from 'react';
import { MainStyle } from '../assets/styles/Main'



const MainContent = (props) => {
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    async function fetchData() {
        const res = await fetch("https://jsonblob.com/api/jsonBlob/40718766-70f2-11ea-8c90-2169dd3bcb9b");
        res
            .json()
            .then((res) => {
                setData(res.results);
            })
            .catch(err => setErrors(err));
    }
    useEffect(() => {
        fetchData();
    }, []);
    const handleToggle = () => {
        setToggle(!toggle)
    };
    if (hasError) {
        return (
            <MainStyle>
                <span>Has error</span>
            </MainStyle>
        )
    }
    else {
        if (!toggle) {
            return (
                <MainStyle>

                    {
                        data !== null ? data.slice(0, 5).map((element, index) => { return (<li key={index}>{element.name}</li>); }) : null
                    }
                    <button onClick={handleToggle}>Show</button>
                </MainStyle>
            )
        }
        else {
            return (
                <MainStyle>
                    {
                        data !== null ? data.map((element) => { return (<li>{element.name}</li>); }) : null
                    }
                    <button onClick={handleToggle}>Hide</button>
                </MainStyle>
            )
        }
    }

}
export default MainContent;