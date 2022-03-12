import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import './Tx'
import Tx from './Tx';


function App() {
    const [txs, setTxs]= useState([]);
    const [search, setSearch]= useState('')

    useEffect(()=> {
        axios.get('https://api.dev.dex.guru/v1/chain/1/wallets/0x36a454aef52938c8637cd4689b2980c1cfd43389/transactions/swaps', {
            headers: { 
                'api-key': 'G7BQ50aIq-LewJeBmJdixYEU6dgb_FSHFPgwrn1sAcU'
            } 
        }).then(res=> {
            setTxs(res.data.data)
            console.log(res.data.data)
        }).catch(error=> console.log(error))
    }, []);

    const handleChange = e => {
      setSearch(e.target.value)
    }

    const dexTrades= txs;


    return(
        <div className='DEX-trades'>
            <div className="addr-search">
              <h1 className="search-text">Search an address</h1>
              <form>
                <input type='text'
                placeholder='search'
                className='addr-input' onChange={handleChange} />
              </form>
            </div>
            <h1>DEX Trade History</h1>
            <br></br>
            {
            dexTrades &&
              dexTrades.map((tx, index) => {
                return (
                  <Tx
                    key={index}
                    transaction={tx.transaction_address}
                    time={new Date((tx.timestamp)*1000).toLocaleString()}
                    symbol={tx.tokens_out[0].symbol}
                    amt_out={tx.tokens_out[0].amount_out}
                    base_price={tx.tokens_out[0].price_usd}
                    swappedSymbol={tx.tokens_in[0].symbol}
                    amt_in={tx.tokens_in[0].amount_in}
                    quote_price={tx.tokens_in[0].price_usd}
                    amt_usd={tx.amount_usd}
                    amm={tx.amm}
                  />
              );
            })}
        </div>
    )
}

export default App;
