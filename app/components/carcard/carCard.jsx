import React from "react";
import Image from "next/image";
import styles from "./carCard.module.css"
function CarCard({ img, price, year, mark, model }) {

  const imgUrl = typeof img === 'string' ? img : img.imgUrl;

  return (
    <div className={styles.carCard}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={imgUrl} alt="carPhoto" />
      </div>
      <div className={styles.name}>{`${mark} ${model}`}</div>
      <div className={styles.yearPrice}>
        <div>   {year} </div>
        <div>   {`$ ${price}`} </div>
      </div>
    </div>
  )
}

export default CarCard;