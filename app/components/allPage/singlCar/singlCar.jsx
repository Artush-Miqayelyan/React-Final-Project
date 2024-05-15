"use client"
import React, { useState, Fragment } from "react";
import styles from "./singlCar.module.css"

import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useSelector, useDispatch } from "react-redux";

import {
    selectCurrentUser,
    setCurrentUser
} from '@/app/redux/features/currentUser/currentUserSlice'

import Image from "next/image"
import Link from "next/link"

function SingleCar({ isSaved, car }) {

    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)

    const [isSavedValue, setIsSavedValue] = useState(isSaved)

    const { id, brand, img, year, model, mileage, body_type, color, transmission, steering, engine, price, country, customs_cleared, on_auction, on_road, priority } = car
    const [imgSrc, setImgSrc] = useState(img[0]?.imgUrl)
    const handleOnMouseEnter = () => setImgSrc(img[1]?.imgUrl)
    const handleOnMouseLeave = () => setImgSrc(img[0]?.imgUrl)

    function handleOnUnSaveClick(event) {
        event.stopPropagation()
        event.preventDefault()
        setIsSavedValue(false)
    }

    function handleOnSaveClick(event) {
        event.stopPropagation()
        event.preventDefault();
        setIsSavedValue(true)
    }

    function handleOnSave(currentUserID, updatedUserWithNewSavedOffers) {
        fetch(`http://localhost:4000/users/${currentUserID}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUserWithNewSavedOffers)
        }).then(() => {
            dispatch(setCurrentUser(updatedUserWithNewSavedOffers))
        })
    }


    function handleOnUnsave(currentUserID, updatedUserWithUnSavedOffers) {
        fetch(`http://localhost:4000/users/${currentUserID}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUserWithUnSavedOffers)
        }).then(() => {
            dispatch(setCurrentUser(updatedUserWithUnSavedOffers))
        })
    }

    return (
        <div className={`${styles.singlCar} ${priority === "urgent sale" ? styles.singlCarBorderRed : styles.singlCarBorderGrey}`}>
            <Link href={`/cars/${id}`}>
                <div className={styles.imgContainer} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                    {currentUser ? <>
                        {isSavedValue ? <IconButton
                            className={styles.saveBtn}
                            onClick={(event) => {
                                const updatedSavedOffers = currentUser.SavedOffers.filter(currentSavedOffer => currentSavedOffer.id !== id)

                                const updatedUserWithUnSavedOffer = {
                                    ...currentUser,
                                    SavedOffers: [...updatedSavedOffers]
                                }

                                handleOnUnSaveClick(event)
                                handleOnUnsave(currentUser.id, updatedUserWithUnSavedOffer)
                            }}>
                            <FavoriteIcon color='primary' />
                        </IconButton>
                            :
                            <IconButton
                                className={styles.saveBtn}
                                onClick={(event) => {

                                    debugger
                                    console.log(currentUser.SavedOffers)

                                    const updatedUserWithNewSavedOffers = {
                                        ...currentUser,
                                        SavedOffers: [...currentUser.SavedOffers, car]
                                    }

                                    handleOnSaveClick(event)
                                    handleOnSave(currentUser.id, updatedUserWithNewSavedOffers)
                                }}>
                                <FavoriteBorderIcon />
                            </IconButton>}
                    </> : null}
                    <Image
                        style={{ borderRadius: "7px", objectFit: "cover" }}
                        loading="lazy"
                        src={imgSrc || ''}
                        alt="car"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className={styles.mainInfo}>
                    <div className={styles.year_mark}>
                        <span className={styles.year}>{year}</span>
                        <span className={styles.brand_model}>{brand} {model}</span>
                    </div>
                    <span className={styles.body_type}>{body_type.toLowerCase()}</span>
                    <span className={styles.mileage}>{mileage + " km"} </span>
                    <span className={styles.engine}>{engine + "/"}{transmission + "/"}{steering + "/"}{color.toLowerCase()}</span>
                    <div className={styles.country}>
                        {country + ", "} {on_auction ? "On the auction, " : on_road ? "On the road, " : null}
                        {customs_cleared ? <span className={styles.green}>Custom cleared </span> : <span className={styles.red}>Custom not cleared</span>}
                    </div>
                </div>
                <div className={styles.price}>
                    <span>{price + " $"}</span>
                </div>
            </Link>
        </div>
    )
}

export default SingleCar