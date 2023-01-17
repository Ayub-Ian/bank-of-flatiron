import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import TransactionList from "./TransactionList";
import AddTransactionForm from "./AddTransactionForm";



function App() {

  const API = "http://localhost:3000/transactions?q="
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(" ")


  useEffect(() => {
    fetch(API + query).then(res => res.json())
    .then(data => setData(data))
  }, [query])

  function onAddData(data) {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: data.date,
        description: data.description,
        category: data.category,
        amount: data.amount,
      }),
    });
    alert('Added successfully');
  }

  function onSearch(e) {
    setQuery(e.target.value)
    console.log(e.target.value)
  }

 

  return (
    <div className="main">
      <div className="container"> 
        <h2 className="page-title">Transaction History</h2>
        <div className="wrapper">
          <div className="list">
            <div className="l-wrapper">
            <SearchForm onSearch={onSearch} />
            <TransactionList transactions={data} /> 
            </div>
          </div>
          <div className="form">
            <AddTransactionForm onAddData={onAddData}  /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
