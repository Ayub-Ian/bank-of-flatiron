import React, {} from "react";
import SearchForm from "./SearchForm";
import TransactionList from "./TransactionList";
import transactions  from '../db/db'

function App() {
  // console.log(transactions.transactions)
  return (
    <div className="main">
      <div className="container"> 
        <h2 className="page-title">Transaction History</h2>
        <div className="wrapper">
          <div className="list">
            <div className="l-wrapper">
            <SearchForm />
            <TransactionList transactions={transactions.transactions} /> 
            </div>
          </div>
          <div className="form">
            {/* <AddTransactionForm />  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
