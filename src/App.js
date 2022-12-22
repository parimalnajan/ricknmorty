import './App.css';
import React from 'react';
import Characters from './pages/Characters';

function App() {
  return (
    <div className="App p-8">
      <h2 className='font-medium text-2xl text-gray-700 '> Rick And Morty (and everyone else).</h2>
      <Characters/>
    </div>
  );
}

export default App;
