import React from 'react';
import './App.css';
import data from './data'
import Item from './Item';

function App() {


  
  return (
    <div className="container">

<div className="app-wrapper">
<h2>Lista</h2>
    {data.input.map((item, index) => {


return (
      <div
      key={item.name}
      className="listitems">
        <Item 
        item={item}
        index={index}
        />
      </div>)
})}
      
</div>
      
    </div>
  );
}

export default App;
