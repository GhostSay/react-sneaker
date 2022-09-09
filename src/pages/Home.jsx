import React, { useState } from 'react'
import axios from 'axios'
import styles from './homeStyles.css'
import {Link} from 'react-router-dom'

function Homee(){

  const [getFavorites, setGetFavorites] = React.useState([])

  React.useEffect((obj) =>{
    axios.get('https://63091931722029d9ddde846f.mockapi.io/favorites').then(res =>
    {
      setGetFavorites(res.data);
    });
    },[])

  
    const onRemoveItem = (id) =>
  {
    axios.delete(`https://63091931722029d9ddde846f.mockapi.io/favorites/${id}`);
    setGetFavorites((prev) =>prev.filter(item => item.id !== id));

  }


    return(

        
        <div className='favorites'>
             <header>
            <div className="headerLeft">
              <img width={40} height={40} src="/img/logo.png"/>
              <div className="headerInfo">
                <h3>React Sneakers</h3>
                <p>Магазин лучших кроссовок</p>
              </div>
            </div>
            <ul className="headerRight">
              <li>
                  <Link to='/'>
                    <p className='back'>Go to back</p>
                  </Link>
              </li>
            </ul>

        </header>
        <div className="body">
          {getFavorites.length > 0 ?
          <div className="sneakerss"> 
            {getFavorites.map ((item) =>(
              <div className="cartItem-fav">
                <img src={item.imageUrl} className="cartItemsSneakers"/>
                <div className="cartItemsDetails">
                 <p>{item.title}</p>
           
                 <b>{item.price} руб.</b>
                 <img src="/img/x.png" onClick={()=> onRemoveItem(item.id)} alt="Remove"  className='cartItemsRemove'/>

                </div>
              </div>

          ))}
        </div> : <p className="negative-text">Пусто...</p>}
        
      </div>
        </div>
    )
}

export default Homee