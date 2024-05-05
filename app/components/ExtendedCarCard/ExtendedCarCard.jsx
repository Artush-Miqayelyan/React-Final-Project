import React from 'react';
import styles from './ExtendedCarCard.module.css'

import Image from 'next/image';

function ExtendedCarCard({ImgUrl, year, brand, model, mileage, body_type, engine, transmission, steering, color, country, customs_cleared , price}) {
   
    const imgUrl = typeof ImgUrl === 'string' ? ImgUrl : ImgUrl.imgUrl;

    return (
        <div className={styles.CardContainer}>
            <div className={styles.leftPart}>
                <Image
                    priority
                    src={imgUrl}
                    alt="picture"
                    objectFit="cover"
                    width={180}
                    height={180}
                    className={styles.img}
                />
            </div>
            <div className={styles.centerPart}>
                <div className={styles.MarkModelYear}>{`${year} ${brand} ${model}`}</div>
                <div className={styles.ExntendedInfo}>{`${mileage} , ${body_type} , ${engine} , ${transmission} , ${steering} , ${color}`}</div>
                <div className={styles.IsCustomCleared}>{`${country} , ${customs_cleared ? 'Custom Cleared' : 'Custom Not Cleared'}`}</div>
            </div>
            <div className={styles.rightPart}>
                <div className={styles.price}>{`$ ${price}`}</div>
            </div>
        </div>
    );
}

export default ExtendedCarCard;