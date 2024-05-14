import React, { lazy, useState } from "react";
import styles from "./carCard.module.css"

import Skeleton from '@mui/material/Skeleton';

import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useSelector, useDispatch } from "react-redux";

import {
  selectCurrentUser,
  setCurrentUser
} from '@/app/redux/features/currentUser/currentUserSlice'

import Image from "next/image";
import Link from "next/link";

function CarCard({ isSaved, car }) {

  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  const { price, year, brand, model, priority, id, img } = car

  const [isSavedValue, setIsSavedValue] = useState(isSaved)

  const [imgSrc, setImgSrc] = useState(img[0]?.imgUrl)
  const handleOnMouseEnter = () => setImgSrc(img[1]?.imgUrl)
  const handleOnMouseLeave = () => setImgSrc(img[0]?.imgUrl)

  function handleOnUnSaveClick(event) {
    event.stopPropagation()
    setIsSavedValue(false)
  }

  function handleOnSaveClick(event) {
    event.stopPropagation()
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

  return <Link className={styles.SingleCarLink} href={`/cars/${id}`} >
    <div className={styles.carCard} >
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
        {imgSrc ? <Image
          loading="lazy"
          src={imgSrc || ''}
          alt="car"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className={styles.img}
        /> : <Skeleton variant="rectangular" width={190} height={168} />}
      </div>

      <div className={styles.name}>{`${brand} ${model}`}</div>
      <div className={styles.yearPrice}>
        <div>   {year} </div>
        <div>   {`$ ${price}`} </div>
      </div>
    </div >
  </Link>
}

export default CarCard;