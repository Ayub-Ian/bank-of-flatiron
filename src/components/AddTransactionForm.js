import React from 'react'

function AddTransactionForm() {
  return (
    <div className='add-form'>
        <h3>ADD TRANSACTION</h3>
        <form>
            <label>Description</label>
            <input type="text" placeholder='Purpose of use'/>
            <label>Date</label>
            <input type="text" placeholder='Date of transaction'/>
            <label>Amount</label>
            <input type="text"placeholder='Amount transacted' />
            <label>Category</label>
            <input type="text" placeholder='Category of purpose' />
            <input type="submit" value="Add transaction"/>
        </form>
    </div>
  )
}

export default AddTransactionForm