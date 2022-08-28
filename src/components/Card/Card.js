import styles from './card.module.css'
import React from 'react'

function Card({ title, imageUrl, price, onFavorite, onPlus })
{
  const [isAdded, setIsAdded] = React.useState(true)
  const [isLiked, setIsLiked] = React.useState(true)

  const onClickPlus = () =>
  {
    onPlus({title, imageUrl, price})
    setIsAdded(!isAdded)
  }

  
  const onClickHeart = () =>
  {
    setIsLiked(!isLiked)
  }


    return(
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img onClick={onClickHeart} src={isLiked ? 'img/unlike.png' : 'img/cardLiked.png'}/>
            </div>
            <img width={133} height={112} src={imageUrl} />
            <h5>{title}</h5>
            <div className={styles.cardBottom}>
              <div className={styles.narx}>
                <span className={styles.span}>Цена:</span>
                <b className={styles.b}>{price} руб.</b>
              </div>
              <div className={styles.buttonMother}>

                <img className={styles.plus} onClick={onClickPlus} width={11} height={11} src={isAdded ? 'img/notCheckedPlus.png' : 'img/checkedPlus.png'} />
             
              </div>
            </div>
           </div>
);
}

export default Card