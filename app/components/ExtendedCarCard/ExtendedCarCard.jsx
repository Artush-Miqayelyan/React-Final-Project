import React, { useEffect } from 'react';
import styles from './ExtendedCarCard.module.css'

import { IconButton } from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useSelector } from 'react-redux';

import {
    selectCurrentUser
} from '../../redux/features/currentUser/currentUserSlice'

import Image from 'next/image';

function ExtendedCarCard({ car }) {

    useEffect(() => {
        console.log("Extended Filter Bar ::::: ")
    }, [])

    const currentUser = useSelector(selectCurrentUser)
    const state = useSelector(state => state)

    console.log(state)

    const { year, brand, model, mileage, body_type, engine, transmission, steering, color, country, customs_cleared, price } = car
    const ImgUrl = car.img[0]?.imgUrl

    const imgUrl = typeof ImgUrl === 'string' ? ImgUrl : ImgUrl?.imgUrl; //for bag fix

    function handleOnSave(currentUserID, updatedUserWithNewSavedOffers) {
        fetch(`http://localhost:4000/users/${currentUserID}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUserWithNewSavedOffers)
        })
    }

    return (
        <div className={styles.CardContainer}>
            <div className={styles.leftPart}>
                <Image
                    priority
                    src={imgUrl || ''}
                    alt="picture"
                    style={{objectFit: "cover"}}
                    width={180}
                    height={180}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            <IconButton className={styles.saveBtn} onClick={() => {
                const updatedUserWithNewSavedOffers = {
                    ...currentUser,
                    SavedOffers: [...currentUser.SavedOffers, car]
                }

                handleOnSave(currentUser.id, updatedUserWithNewSavedOffers)
            }}>
                <FavoriteBorderIcon />
            </IconButton>
        </div>
    );
}

export default ExtendedCarCard;