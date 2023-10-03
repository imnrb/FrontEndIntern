import React from 'react';
import './App.css'; 
import ItemCardList from './ItemCardList';
import item1Image from './photos/item1.jpg';
import item2Image from './photos/item2.jpg';

const items = [
  {
    imageUrl: item1Image,
    description: 'FLower 1 ',
  },
  {
    imageUrl: item2Image,
    description: 'Flower 2',
  },
  {
    imageUrl:'https://picsum.photos/200',
    description:'Random online'
  }
];

function App() {
  return (
    <div className="App">
      <h1>Item List</h1>
      <ItemCardList items={items} />
    </div>
  );
}

export default App;
