import styles from './card.module.css'
import React from 'react'

function Card(props)
{
  const [isAdded, setIsAdded] = React.useState(true)
  const [isLiked, setIsLiked] = React.useState(true)

  const onClickPlus = () =>
  {
    setIsAdded(!isAdded)
  }

  const onClickHeart = () =>
  {
    setIsLiked(!isLiked)
  }

  React.useEffect(()=>
  {
    console.log("ozgardi")
  },[isAdded])

    return(
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img onClick={onClickHeart} src={isLiked ? 'img/unlike.png' : 'img/cardLiked.png'}/>
            </div>
            <img width={133} height={112} src={props.imageUrl} />
            <h5>{props.title}</h5>
            <div className={styles.cardBottom}>
              <div className={styles.narx}>
                <span className={styles.span}>Цена:</span>
                <b className={styles.b}>{props.price} руб.</b>
              </div>
              <div className={styles.buttonMother}>

                <img className={styles.plus} onClick={onClickPlus} width={11} height={11} src={isAdded ? 'img/notCheckedPlus.png' : 'img/checkedPlus.png'} />
             
              </div>
            </div>
           </div>
);
}

export default Card