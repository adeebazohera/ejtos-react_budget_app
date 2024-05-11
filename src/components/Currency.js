import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const [currency, setCurrency] = useState('$ Dollar');

    const handleSelect = (event) => {
        setCurrency(event.target.value);
    }
    return (
        <div className="btn-group">
            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Currency ({currency})
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#" onClick={() => handleSelect('$ Dollar')}>$ Dollar</a>
                <a className="dropdown-item" href="#" onClick={() => handleSelect('£ Pound')}>£ Pound</a>
                <a className="dropdown-item" href="#" onClick={() => handleSelect('€ Euro')}>€ Euro</a>
                <a className="dropdown-item" href="#" onClick={() => handleSelect('₹ Rupee')}>€ Rupee</a>
            </div>
        </div>
    )
}

export default Currency;
