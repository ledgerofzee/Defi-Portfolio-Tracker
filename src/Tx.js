import React from 'react';
import './Tx.css'
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Tx = ({ transaction, time, symbol, amt_out, base_price, swappedSymbol, amt_in, quote_price, amt_usd, amm }) => {
    return (
        <div className='tx-container'>

            <div className='tx-row'>
                <div className='tx-data'>
                    <p className='hash'>Hash:<br></br> {transaction}
                    <br></br>
                    Time:<br></br> {time}</p>
                    <p className='tx-base-symbol'>Base Token Symbol: {symbol}</p>
                    <p className='tx-amt-out'>Base Token Quantity: {amt_out.toLocaleString()}</p>
                    <p className='tx-base-price'>Base Token Price: ${base_price.toLocaleString()}</p>
                    <p className='tx-swapped-symbol'>Swapped Token Symbol: {swappedSymbol}</p>
                    <p className='tx-amt-in'>Swapped Token Quantity: {amt_in.toLocaleString()}</p>
                    <p className='tx-swapped-price'>Swapped Token Price: {quote_price.toLocaleString()}</p>
                    <p className='tx-amt-usd'>Swapped Token Cost: ${amt_usd.toLocaleString()}</p>
                    <p className='tx-amm'>AMM: {amm}</p>
                </div>
            </div>
        </div>
    )
}

export default Tx;
