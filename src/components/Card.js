function Card()
{
    return(
        <div className="card">
            <div className="favorite">
                <img src='/img/unlike.png'/>
            </div>
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
)
}

export default Card