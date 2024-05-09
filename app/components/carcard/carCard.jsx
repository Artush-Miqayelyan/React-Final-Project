import React from "react";
import Image from "next/image";
import styles from "./carCard.module.css"
function CarCard({ img, price, year, mark, model }) {

  const imgUrl = typeof img === 'string' ? img : img.imgUrl;

  return (
    <div className={styles.carCard}>
      <div className={styles.imgContainer}>
        <Image
          priority
          src={imgUrl}
          alt="car"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          objectFit="cover"
          className={styles.img}
        />
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