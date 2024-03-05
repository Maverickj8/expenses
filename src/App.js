import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import AllExpense from './components/AllExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {

  return (
    <div className="hero">
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <AllExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>

    <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
    </div>
  );
}

export default App;



