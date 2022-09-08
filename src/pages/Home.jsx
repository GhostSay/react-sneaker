import React, { useState } from 'react'
import Card from '../components/Card/Card.js'
import Header from '../components/Header'
import {Link} from 'react-router-dom'

function Homee({items, searchValue, onRemove, onChangeSearchInput }){
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
                <img width={18} height={18} src="/img/Group.png" />
                <span>1205 руб.</span>  
              </li>
              <li>
                  <Link to='/'>
                    <p className='back'>Go to back</p>
                  </Link>
              </li>
            </ul>

        </header>
        <div className="content">
        <div className="search-div">   
          <div className="search">
            <img src="/img/search.png"/>
            <input onInput={onChangeSearchInput} value={searchValue} placeholder="Поиск..." maxLength={40}/>
          </div>
        </div>
        <div className="sneakers"> 
          {items.map ((item) =>(
             <div className="cartItem">
             <img src={item.imageUrl} className="cartItemsSneakers"/>
               <div className="cartItemsDetails">
                 <p>{item.title}</p>
           
                 <b>{item.price} руб.</b>
               </div>
             <img src="/img/x.png" onClick={()=> onRemove(item.id)} alt="Remove"  className='cartItemsRemove'/>
           </div>

          ))}

          
         
         
        </div>
        
      </div>
        </div>
    )
}

export default Homee