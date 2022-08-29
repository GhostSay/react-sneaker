function Drawer({onClose, items = []})
{
    return(
        <div className="overlay">
            <div className="drawer">
              <h2>Корзина<img src="/img/x.png" onClick={onClose}/></h2> 
              <div className="item">
                {items.map((item)=>
                <div className="cartItem">
                <img src={item.imageUrl} className="cartItemsSneakers"/>
                  <div className="cartItemsDetails">
                    <p>{item.title}</p>
                    
                    <b>{item.price} руб.</b>
                  </div>
                <img src="/img/x.png" alt="Remove" className='cartItemsRemove'/>
              </div>
            )}
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