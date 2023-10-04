import React from 'react';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpences from './components/IncomeExpences'
import {TransactionList} from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

import {GlobalProvider} from './context/GlobleState'

// import Expence from './expence_managment/expence'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpences />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
  // <Expence/>
