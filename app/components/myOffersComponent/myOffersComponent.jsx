import React from 'react';
import styles from './myOffersComponent.module.css'

import ExtendedCarCard from '../ExtendedCarCard/ExtendedCarCard'
import {
    selectCurrentUser
} from '../../redux/features/currentUser/currentUserSlice'

import { useSelector } from 'react-redux';

function MyOffersComponent() {

    const currentUser = useSelector(selectCurrentUser)

    return (
        <div className={styles.MyOffersComponent}>
            {currentUser?.offers?.map((current) => {
                return <ExtendedCarCard
                    car={current}
                />
            })}
        </div>

    );
}

export default MyOffersComponent;