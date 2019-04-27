import React from 'react';
import DiscountForm from './components/DiscountForm';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="APP-title">
          Free Zattoo
        </h1>
        <DiscountForm />
      </header>
    </div>
  );
}

export default App;
