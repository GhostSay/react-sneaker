import React, { useState } from 'react'
import {Route} from 'react-router-dom'
import axios from 'axios'
import Card from './components/Card/Card.js'
import Header from './components/Header'
import Drawer from './components/Drawer'



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
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

  const onRemoveItem = (id) =>
  {
    axios.delete(`https://63091931722029d9ddde846f.mockapi.io/cart/${id}`);
    setCartItems((prev) =>prev.filter(item => item.id !== id));
  }

  const onAddToCart = (obj) =>
  {
    axios.post('https://63091931722029d9ddde846f.mockapi.io/cart', obj);
    setCartItems((prev) =>[...prev, obj]);
  } 
  
  const onChangeSearchInput = (event) =>
  {
    console.log();
    setSearchValue(event.target.value)
  }

  const onAddToFavorite = (obj) =>
  {
    axios.post('https://63091931722029d9ddde846f.mockapi.io/favorites', obj);
    setFavorites((prev) =>[...prev, obj]);
  } 

  return (
    <div className="wrapper">
      {cartOpened? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />: null }
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
             onFavorite = {(obj) => onAddToFavorite(obj)}
             onPlus = {(obj) => onAddToCart(obj)}
             />

          ))}

          
         
         
        </div>
        
      </div>
    </div>
  );

}

export default App;