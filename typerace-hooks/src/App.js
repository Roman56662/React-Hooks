import React, {useState} from 'react';
import {render} from 'react-dom'

const App = () => {
    const [userText, setUserText] = useState('');

    const updateUserText = event => {
        setUserText(event.target.value);
        console.log('cerrent userText',userText);
    }
    return (
        <div>
            <h2>Type Race</h2>
            <input value={userText} onChange={updateUserText}/>
        </div>
    )
}


export default App