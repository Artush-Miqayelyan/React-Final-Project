import React, { useState, useEffect } from 'react';
import styles from './SavedOffers.module.css'

import ExtendedCarCard from '../ExtendedCarCard/ExtendedCarCard'
import {
    selectCurrentUser
} from '../../redux/features/currentUser/currentUserSlice'

import { useSelector } from 'react-redux';

function SavedOffers() {

    const currentUser = useSelector(selectCurrentUser)

    const [SavedOffers, setSavedOffers] = useState('')

    useEffect(() => {
        setSavedOffers(currentUser.SavedOffers)
    }, [currentUser])

    return (
        <div className={styles.SavedOffers}>
            {SavedOffers.length ? SavedOffers.map((currentSavedOffer) => {
            
            const isOwnOffer = Boolean(currentUser.offers.find(currentOffer => currentOffer.id === currentSavedOffer.id))

                return <ExtendedCarCard
                    isOwnOffer={isOwnOffer}
                    isSaved={true}
                    car={currentSavedOffer}
                />
            }) : null}
        </div>

    );
}

export default SavedOffers;