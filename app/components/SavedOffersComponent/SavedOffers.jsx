import React from 'react';
import styles from './SavedOffers.module.css'

import ExtendedCarCard from '../ExtendedCarCard/ExtendedCarCard'
import {
    selectCurrentUser
} from '../../redux/features/currentUser/currentUserSlice'

import { useSelector } from 'react-redux';

function SavedOffers() {

    const currentUser = useSelector(selectCurrentUser)

    return (
        <div className={styles.SavedOffers}>
            {currentUser?.SavedOffers?.map((current) => {
                return <ExtendedCarCard
                    car={current}
                />
            })}
        </div>

    );
}

export default SavedOffers;