import Card from './components/Card/Card.js'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  {
    title:'Мужские Кроссовки Nike Blazer Mid Suede', 
    price:  12999,
    imageUrl: '/img/1.png'},
  {
    title:'Кроссовки Puma X Aka Boku Future Rider', 
    price: 8999,
    imageUrl: '/img/1.png'},
  {
    title:'Мужские Кроссовки Nike Air Max 270',
    price: 8499,
    imageUrl: '/img/1.png'
    }



]
console.log(arr.price);
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
        
        
      
        

          {arr.map ((obj) =>(
             <Card 
             title = {obj.title}             
             price = {obj.price}
             imageUrl = {obj.imageUrl}
             />

          ))}

          
         
         
        </div>
        
      </div>
    </div>
  );

}

export default App;