import React from 'react';
import logo from './logo.svg';
//import './App.css';
import  './tailwind.css';


import HelloWorld from './Components/HelloWorld';
import Counter from './Components/Counter';
import Header from './Components/Header';

function App() {
  return (
    <div id="appComponent">
        <Header />
        <HelloWorld name="World" />
        <Counter />
    </div>
  );
}

export default App;
