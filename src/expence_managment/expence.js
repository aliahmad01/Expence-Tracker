import React from "react";
import "./expence.css"

function Expence() {

    let transactions = [
        { amount: 500, desc: "cash" },
        { amount: 40, desc: "book" },
        { amount: 200, desc: "camara" }
    ]
    return (
        <div className="container">
            <h2 className="text-center"> Expence Traker</h2>
            <h3>Your Balance <br /> $260.00</h3>

            <div className="expence-container">
                <h3>INCOME <br /> $500.00</h3>
                <h3>EXPENCE <br /> $240.00</h3>
            </div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transObj, index) => {
                    return (<li>
                        <span>{transObj.amount}</span>
                        <span>{transObj.desc}</span>
                    </li>)
                })}

            </ul>
            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form">
                <label>Enter Discription<br />
                    <input type="text" required />
                </label>
                <br />
                <label>Enter Amount<br />
                    <input type="number" required />
                </label>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    )
}
export default Expence;