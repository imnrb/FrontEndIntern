import React from 'react';
import Backup from './photos/backup.jpg'
function ItemCardList({ items }) {
  return (
    <div className="item-card-list">
      {items.map((item, index) => (
        <div className="item-card" key={index}>
          <img
            src={item.imageUrl}
            alt={`Item ${index}`}
            onError={(e) => {    //Handling breakdown in url or when url is not loading
              e.target.src = Backup; 
            }}
          />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemCardList;
