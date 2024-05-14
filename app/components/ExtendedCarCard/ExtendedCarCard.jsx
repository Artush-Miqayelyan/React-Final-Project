import React, { useEffect, useState } from 'react';
import styles from './ExtendedCarCard.module.css'

import { IconButton } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useSelector, useDispatch } from 'react-redux';

import {
    selectCurrentUser,
    setCurrentUser
} from '../../redux/features/currentUser/currentUserSlice'

import Image from 'next/image';
import Link from 'next/link';
import SavedOffers from '../SavedOffersComponent/SavedOffers';

function ExtendedCarCard({ isOwnOffer, isSaved, car }) {

    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)

    const { year, brand, model, mileage, body_type, engine, transmission, steering, color, country, customs_cleared, price, id, img } = car

    const [isSavedValue, setIsSavedValue] = useState(isSaved)
    const [isOwnOfferValue, setIsOwnOfferValue] = useState(isOwnOffer)

    const [imgSrc, setImgSrc] = useState(img[0]?.imgUrl)
    const handleOnMouseEnter = () => setImgSrc(img[1]?.imgUrl)
    const handleOnMouseLeave = () => setImgSrc(img[0]?.imgUrl)

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

    function handleOnOfferDelete(currentUserID, updatedUserWithDeletedOffers) {
        fetch(`http://localhost:4000/users/${currentUserID}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUserWithDeletedOffers)
        }).then(() => {
            dispatch(setCurrentUser(updatedUserWithDeletedOffers))
        }).then(() => {
            fetch(`http://localhost:4000/cars/${id}`, {
                method: 'DELETE',
            })
        })
    }

    return (
        <Link className={styles.SingleCarLink} href={`/cars/${id}`} >
            <div className={styles.CardContainer}>
                <div className={styles.leftPart} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                    <Image
                        loading='lazy'
                        src={imgSrc || ''}
                        alt="picture"
                        style={{ objectFit: "cover" }}
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
                {isSavedValue ? <IconButton
                    className={styles.saveBtn}
                    onClick={() => {
                        const updatedSavedOffers = currentUser.SavedOffers.filter(currentSavedOffer => currentSavedOffer.id !== id)

                        const updatedUserWithUnSavedOffer = {
                            ...currentUser,
                            SavedOffers: [...updatedSavedOffers]
                        }

                        setIsSavedValue(false)
                        handleOnUnsave(currentUser.id, updatedUserWithUnSavedOffer)
                    }}>
                    <FavoriteIcon color='primary' />
                </IconButton>
                    :
                    <IconButton
                        className={styles.saveBtn}
                        onClick={() => {

                            const updatedUserWithNewSavedOffers = {
                                ...currentUser,
                                SavedOffers: [...currentUser.SavedOffers, car]
                            }

                            setIsSavedValue(true)
                            handleOnSave(currentUser.id, updatedUserWithNewSavedOffers)
                        }}>
                        <FavoriteBorderIcon />
                    </IconButton>}
                {isOwnOfferValue ? <IconButton
                    className={styles.deleteBtn}
                    onClick={() => {
                        const updatedOffers = currentUser.offers.filter((current) => current.id !== id)
                        const updatedSavedOffers = currentUser.SavedOffers.filter((current) => current.id !== id)

                        const updatedUserWithDeletedOffer = {
                            ...currentUser,
                            offers: [...updatedOffers],
                            SavedOffers: [...updatedSavedOffers]
                        }

                        handleOnOfferDelete(currentUser.id, updatedUserWithDeletedOffer)
                    }}>
                    <DeleteIcon color='error' />
                </IconButton> : null}
            </div>
        </Link>
    );
}

export default ExtendedCarCard;