import React, { useEffect, useState, memo } from 'react';
import styles from './myOffersComponent.module.css'

import ExtendedCarCard from '../ExtendedCarCard/ExtendedCarCard'
import {
    selectCurrentUser
} from '../../redux/features/currentUser/currentUserSlice'

import { useSelector } from 'react-redux';

const MyOffersComponent = memo(() => {

    const currentUser = useSelector(selectCurrentUser)
    const [currentUserOffers, setCurrentUserOffers] = useState('')

    useEffect(() => {
        setCurrentUserOffers(currentUser.offers)
    }, [currentUser, currentUser.SavedOffers])

    return (
        <div className={styles.MyOffersComponent}>
            {currentUserOffers?.length ? currentUserOffers.map((currentOffer) => {
               const isSaved = Boolean(currentUser.SavedOffers.find((currentSavedOffer) => currentOffer.id === currentSavedOffer.id))

                return <ExtendedCarCard
                    isOwnOffer={true}
                    isSaved={isSaved}
                    car={currentOffer}
                />
            }) : null}
        </div>

    );
})

export default MyOffersComponent;