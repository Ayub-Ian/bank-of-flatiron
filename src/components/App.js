import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import TransactionList from "./TransactionList";
import AddTransactionForm from "./AddTransactionForm";



function App() {

  const API = "http://localhost:3000/transactions"
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch(API).then(res => res.json())
    .then(data => setData(data))
  }, [])
  

  return (
    <div className="main">
      <div className="container"> 
        <h2 className="page-title">Transaction History</h2>
        <div className="wrapper">
          <div className="list">
            <div className="l-wrapper">
            <SearchForm />
            <TransactionList transactions={data} /> 
            </div>
          </div>
          <div className="form">
            <AddTransactionForm /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
