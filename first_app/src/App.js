import React from 'react';

import Counter from './presentation/Counter/Counter';
import CounterHook from './presentation/CounterHook/CounterHook';


import './App.css';


function App() {
  return (
    <div>
        <Counter />
        <CounterHook initial={117}/>
    </div>
  );
}

export default App;
