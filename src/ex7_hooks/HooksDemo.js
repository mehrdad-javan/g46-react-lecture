import React, { useEffect, useState } from 'react';

const HooksDemo = () => {

    const [date,setDate] = useState('-');
    const  [reloadData, setReloadData] = useState(false);// true

    useEffect(  ()=> {
        console.log('useEffect funtion has been executed!')
        const currentDate = new Date();
        setDate(currentDate.toLocaleString('sv-SE'));
    }  , [reloadData]  );


    const updateDateHandler = () => {
        setReloadData(!reloadData);
    }

    return (
        <div className='container'>
            <h3>Hooks Demo</h3>
            <div className='alert alert-info'>  {date}  </div>
            <div className='row'>
                <div className='col'>
                    <button type='button' className='btn btn-info' onClick={updateDateHandler} >Update Date</button>
                </div>
            </div>
        </div>
    );
};

export default HooksDemo;