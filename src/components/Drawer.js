function Drawer()
{
    return(
        <div className="overlay">
            <div className="drawer">
              <h2>Корзина<img src="/img/x.png"/></h2> 
              <div className="item">
        
        
                <div className="cartItem">
                  <img src="/img/1.png" className="cartItemsSneakers"/>
                    <div className="cartItemsDetails">
                      <p >Мужские Кроссовки Nike Blazer Mid Suede</p>
                      
                      <b>12 999 руб.</b>
                    </div>
                  <img src="/img/x.png" alt="Remove" className='cartItemsRemove'/>
                </div>
                <div className="cartItem">
                  <img src="/img/1.png" className="cartItemsSneakers"/>
                    <div className="cartItemsDetails">
                      <p >Мужские Кроссовки Nike Blazer Mid Suede</p>
                      <b>12 999 руб.</b>
                    </div>
                  <img src="/img/x.png" alt="Remove" className='cartItemsRemove'/>
                </div>
                <div className="cartItem">
                  <img src="/img/1.png" className="cartItemsSneakers"/>
                    <div className="cartItemsDetails">
                      <p >Мужские Кроссовки Nike Blazer Mid Suede</p>
                      <b>12 999 руб.</b>
                    </div>
                  <img src="/img/x.png" alt="Remove" className='cartItemsRemove'/>
                </div>
              </div>
              <div className="totalCost">
                <ul>
                  <li className="cost">
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб.</b>
                  </li>
                  <li className="cost">
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
                  </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="/img/strelka.png" alt="arrow"/></button>
              </div>
             
            </div>
        </div>    
    )
}

export default Drawer