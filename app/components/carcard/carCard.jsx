import React, { Fragment } from "react";
import Image from "next/image";
import styles from "./carCard.module.css"

import Skeleton from '@mui/material/Skeleton';

function CarCard({ img, price, year, mark, model }) {

  const imgUrl = typeof img === 'string' ? img : img.imgUrl;

  return <div className={styles.carCard} >
    <div className={styles.imgContainer}>
      {imgUrl ? <Image
        loading="lazy"
        src={imgUrl}
        alt="car"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
        className={styles.img}
      /> : <Skeleton variant="rectangular" width={190} height={168} />}
    </div>
    <div className={styles.name}>{`${mark} ${model}`}</div>
    <div className={styles.yearPrice}>
      <div>   {year} </div>
      <div>   {`$ ${price}`} </div>
    </div>
  </div >
}

export default CarCard;