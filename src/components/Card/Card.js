import styles from './card.module.css'

function Card(props)
{
  const onClickButton = () =>{
    alert(props.price)
  }


    return(
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src='/img/unlike.png'/>
            </div>
            <img width={133} height={112} src={props.imageUrl} />
            <h5>{props.title}</h5>
            <div className={styles.cardBottom}>
              <div className={styles.narx}>
                <span className={styles.span}>Цена:</span>
                <b className={styles.b}>{props.price} руб.</b>
              </div>
              <div className={styles.buttonMother}>

              <button className={styles.button} onClick={onClickButton}>
                <img className={styles.plus} width={11} height={11} src={'img/plus.png '} />
              </button>
              </div>
            </div>
           </div>
);
}

export default Card