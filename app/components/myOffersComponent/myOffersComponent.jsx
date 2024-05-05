import React from 'react';
import styles from './myOffersComponent.module.css'

import ExtendedCarCard from '../ExtendedCarCard/ExtendedCarCard'
import {
    selectCurrentUser
} from '../../redux/features/currentUser/currentUserSlice'

import { useSelector, useDispatch } from 'react-redux';

function MyOffersComponent() {

    const currentUser = useSelector(selectCurrentUser)

    return (
        currentUser?.offers?.map((current) => {
            return <ExtendedCarCard
                ImgUrl={current.img[0].imgUrl}
                year={current.year}
                brand={current.brand}
                model={current.model}
                mileage={current.mileage}
                body_type={current.body_type}
                engine={current.engine}
                transmission={current.transmission}
                steering={current.steering}
                color={current.color}
                country={current.country}
                customs_cleared={current.customs_cleared}
                price={current.price}
            />
        })
    );
}

export default MyOffersComponent;