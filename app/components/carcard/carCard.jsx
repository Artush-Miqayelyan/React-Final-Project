import React from "react";
import Image from "next/image";
import styles from "./carCard.module.css"
function CarCard({ img, price, year, mark, model }) {

  return (
    <div className={styles.carCard}>
      <div className={styles.imgContainer}>

        <Image src={img} width={100} height={60} alt="carPhoto" />
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