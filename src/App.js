import React, { useState } from 'react'
import Card from './components/Card/Card.js'
import Header from './components/Header'
import Drawer from './components/Drawer'



function App() {
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  
  fetch('https://63091931722029d9ddde846f.mockapi.io/items').then((res) =>
    {return res.json() })
    .then((json) =>{
      setItems(json);})


  return (
    <div className="wrapper">
      {cartOpened? <Drawer onClose={() => setCartOpened(false)} />: null }
      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content">
        <div className="search-div">
          <h1 className="allSneakers">Все кроссoвки!</h1>
          
          <div className="search">
            <img src="/img/search.png"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="sneakers">
        
        
          {items.map ((obj) =>(
             <Card 
             title = {obj.title}             
             price = {obj.price}
             imageUrl = {obj.imageUrl}
             />

          ))}

          
         
         
        </div>
        
      </div>
    </div>
  );

}

export default App;