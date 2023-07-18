import React, { useState } from 'react'
import { PlusCircle } from 'react-feather';

function InputControl(props) {
    const [inputText, setInputText] = useState('');

    const headleEnterPress = (e) => {
        if (e.keyCode === 13) {
            props.addList(inputText)
            setInputText("");
        }
    }
    return (
        <div className='input-container'>
            <input type='text' className='input' placeholder='Enter your task'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onkeydown={headleEnterPress}
            />
            
            <PlusCircle className='plus-circle' onClick={() => {
                props.addList(inputText)
                setInputText("")
            }}
            />
        </div>
    );
}

export default InputControl;