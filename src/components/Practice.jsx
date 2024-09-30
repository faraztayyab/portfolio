import React from 'react'
import { useState } from 'react'

const Practice = () => {
    const [count, setCount] = useState(null)
    function add() {
        setCount(count + 1)
    }
    function del() {
        setCount(0)
    }
    function dell() {
        setCount(count - 1)
    }
    return (
        <div className='container'>

            <div className='d-flex'>
                <div className="h5 text-light">User Details</div>
                <button className='btn btn-light mx-auto' onClick={add}>Add User {count}</button>
                <button className='btn btn-danger' onClick={dell} onDoubleClick={del}>Remove All</button>

            </div>
            <div className="ul text-white"><ul>
                <li>{count}</li>
            </ul>
            </div>
            <div className="col">
                

            </div>
        </div>

    )
}

export default Practice