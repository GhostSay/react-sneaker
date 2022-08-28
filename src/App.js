import React, { useState } from 'react'
import Card from './components/Card/Card.js'
import Header from './components/Header'
import Drawer from './components/Drawer'



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  
  React.useEffect(() =>{
    fetch('https://63091931722029d9ddde846f.mockapi.io/items').then((res) =>
    {return res.json() })
    .then((json) =>{
      setItems(json);})
  },[])

  const onAddToCart = (obj) =>
  {
    setCartItems([...cartItems, obj]);
  } 
  console.log(cartItems);
  
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
        
        
          {items.map ((item) =>(
             <Card 
             title = {item.title}             
             price = {item.price}
             imageUrl = {item.imageUrl}
             onFavorite = {()=> console.log("favorited")}
             onPlus = {(obj) => onAddToCart(obj)}
             />

          ))}

          
         
         
        </div>
        
      </div>
    </div>
  );

}

export default App;