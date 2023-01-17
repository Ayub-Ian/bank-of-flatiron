import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <table className="ttable" cellSpacing="12px">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
            {transactions.map(transaction => {
                return <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
            })}
          
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
