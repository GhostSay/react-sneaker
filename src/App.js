import Card from './components/Card.js'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  {names:'Мужские Кроссовки Nike Blazer Mid Suede', price:12999},
  {name:'Кроссовки Puma X Aka Boku Future Rider', price:8999}

]

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="search-div">
          <h1 className="allSneakers">Все кроссoвки!</h1>
          
          <div className="search">
            <img src="/img/search.png"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="sneakers">
        <Card/>
        

         
         
        </div>
        
      </div>
    </div>
  );
}

export default App;