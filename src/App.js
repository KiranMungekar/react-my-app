import React from 'react';
import logo from './logo.svg';
import './App.css';



import HelloWorld from './Components/HelloWorld';
import Counter from './Components/Counter';

function App() {
  return (
    <div id="appComponent">
        <HelloWorld name="World" />
        <Counter />
    </div>
  );
}

export default App;
