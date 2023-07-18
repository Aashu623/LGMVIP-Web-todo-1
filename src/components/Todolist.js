import React, { useState } from 'react'
import { CheckCircle, Trash2 } from 'react-feather';
function Todolist(props) {
    const [isComplete,setComplete] = useState(false);

    const handleComplete = () =>{
        setComplete(!isComplete);
    }
    return (
        <div className='list-container'>
            <li className={isComplete?'list-item-complete':'list-item'}>
                <p className={isComplete?'complete':'item'}>
                    {props.index + 1}{". "}
                    {props.item}
                </p>
                <div className='icons'>
                    <CheckCircle onClick={handleComplete}/>
                    <Trash2 className='trash-icon'
                        onClick={e => {
                            props.deleteItem(props.index)
                        }}
                    />
                </div>
            </li>
        </div >
    );
}

export default Todolist;