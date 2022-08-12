function App() {
  return (
    <div className="wrapper">
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
            <img width={18} height={18} src="/img/Group.png"/>
            <span>1205 руб.</span>  
          </li>
          <li>
          <img width={20} height={20} src="/img/Union.png"/>
          </li>
        </ul>

        </header>
        <div className="content">
          <h1 className="allSneakers">Все кроссoвки!</h1>

          <div className="sneakers">

           <div className="card">
             <img width={133} height={112} src="/img/1.png" />
             <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
             <div className="cardBottom">
               <div className="narx">
                 <span>Цена:</span>
                 <b>12 999 руб.</b>
               </div>
               <button className="button">
                 <img width={11} height={11} src="/img/plus.png" />
               </button>
             </div>
           </div>
           <div className="card">
             <img width={133} height={112} src="/img/1.png" />
             <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
             <div className="cardBottom">
               <div className="narx">
                 <span>Цена:</span>
                 <b>12 999 руб.</b>
               </div>
               <button className="button">
                 <img width={11} height={11} src="/img/plus.png" />
               </button>
             </div>

           </div>
           <div className="card">
             <img width={133} height={112} src="/img/1.png" />
             <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
             <div className="cardBottom">
               <div className="narx">
                 <span>Цена:</span>
                 <b>12 999 руб.</b>
               </div>
               <button className="button">
                 <img width={11} height={11} src="/img/plus.png" />
               </button>
             </div>

           </div>
           <div className="card">
             <img width={133} height={112} src="/img/1.png" />
             <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
             <div className="cardBottom">
               <div className="narx">
                 <span>Цена:</span>
                 <b>12 999 руб.</b>
               </div>
               <button className="button">
                 <img width={11} height={11} src="/img/plus.png" />
               </button>
             </div>

           </div>
          </div>
          
        </div>
    </div>
  );
}

export default App;