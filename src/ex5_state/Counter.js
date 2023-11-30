import React, { useState } from 'react';

const Counter = () => {

    const [couter, setCounter] = useState(0);

    const incrementHandler = () => {
        setCounter(couter + 1);
    }

    return (
        <div className='container'>
            <h3>Counter: {couter}</h3>
            <button type='button' className='btn btn-success' onClick={incrementHandler}>Increment</button>
            <button type='button' className='btn btn-danger' onClick={() => setCounter(couter - 1)}>Decrement</button>
            <button type='button' className='btn btn-secondary' onClick={()=> setCounter(0)}>Reset</button>
        </div>
    );

};

export default Counter;