import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'; 


const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const [currency, setCurrency] = useState('Currency ($ Dollar)');
    const [isOpen, setIsOpen] = useState(false);
    const [isCurrency,sendCurrency] = useState('$')
    const handleCurrencyChange = (event) => {
        setCurrency(`Currency (${event.target.textContent})`);
        setIsOpen(false);
        sendCurrency(event.target.id);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: isCurrency,
        });
    };

    return (
        <div>
            <div className="alert alert-success dropdown-toggle" type="button" onClick={() => setIsOpen(!isOpen)}>
                {currency}
            </div>
            {isOpen && (
                <div className="dropdown-menu show">
                    <button className="dropdown-item" id="$" onClick={handleCurrencyChange}>$ Dollar</button>
                    <button className="dropdown-item" id="£" onClick={handleCurrencyChange}>£ Pound</button>
                    <button className="dropdown-item" id="€" onClick={handleCurrencyChange}>€ Euro</button>
                    <button className="dropdown-item" id="₹" onClick={handleCurrencyChange}>₹ Rupee</button>
                </div>
            )}
        </div>
    );
};

export default Currency;


