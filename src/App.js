import React, { useState } from 'react'
import axios from 'axios'
import Card from './components/Card/Card.js'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './pages/Home'
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState("")
  const [cartOpened, setCartOpened] = React.useState(false)
  const [page, setPage] = useState(1)
  React.useEffect((obj) =>{
      axios.get(`https://63091931722029d9ddde846f.mockapi.io/items?search=Nike&page=${page}&limit=2`).then(res =>
      {
        setItems(res.data);
      });

      axios.get('https://63091931722029d9ddde846f.mockapi.io/cart').then(res =>
      {
        setCartItems(res.data);
      })
  },[page])

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
  console.log(page);
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
        <input onChange={(el)=> setPage(el.target.value)}/>
      </div>
    </div>
  );

}

export default App;