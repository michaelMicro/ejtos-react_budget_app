import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setCurrency] = useState(currency);
    const currencyChanged = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }
    return (
        <div className='alert alert-success'>
            <select className={'dropDown'} style={{backgroundColor:'lightgreen', color: 'white'}} id='currency-change' onChange={currencyChanged}>
                <option value='$' style={{color:'black'}}>$ Dollar</option>
                <option value='£' style={{color:'black'}}>£ Pound</option>
                <option value='€' style={{color:'black'}}>€ Euro</option>
                <option value='₹' style={{color:'black'}}>₹ Ruppee</option>
            </select>
        </div>
    );
}
export default Currency;