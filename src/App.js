import React, { useState } from 'react'
import axios from 'axios'
import Card from './components/Card/Card.js'
import Header from './components/Header'
import Drawer from './components/Drawer'



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState("")
  const [cartOpened, setCartOpened] = React.useState(false)
  
  React.useEffect((obj) =>{
      axios.get('https://63091931722029d9ddde846f.mockapi.io/items').then(res =>
      {
        setItems(res.data);
      });

      axios.get('https://63091931722029d9ddde846f.mockapi.io/cart').then(res =>
      {
        setCartItems(res.data);
      })
  },[])

  const onAddToCart = (obj) =>
  {
    axios.post('https://63091931722029d9ddde846f.mockapi.io/cart', obj);
    setCartItems([...cartItems, obj]);
  } 
  console.log(cartItems);
  
  const onChangeSearchInput = (event) =>
  {
    console.log();
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      {cartOpened? <Drawer items={cartItems} onClose={() => setCartOpened(false)} />: null }
      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content">
        <div className="search-div">
          <h1 className="allSneakers">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки!'}</h1>
          
          <div className="search">
            <img src="/img/search.png"/>
            <input onInput={onChangeSearchInput} value={searchValue} placeholder="Поиск..." maxLength={40}/>
          </div>
        </div>
        <div className="sneakers">
        
        
          {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map ((item, index) =>(
             <Card 
             key={index}
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