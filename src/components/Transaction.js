import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobleState';


export default function Transaction({ transaction }) {
    const { deleteTransation } = useContext(GlobalContext);
    let sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransation(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}