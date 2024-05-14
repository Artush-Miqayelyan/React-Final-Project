"use client"
import styles from "./allPage.module.css"
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import SingleCar from "./singlCar/singlCar";
import { useSelector } from "react-redux";

import {
    selectFilteredCars
} from '@/app/redux/features/mainFilterSlice/mainFilterSlice'

import {
    selectCurrentUser
} from '@/app/redux/features/currentUser/currentUserSlice'

const BASE_URL = `http://localhost:4000/cars`

function AllPage() {

    const FilteredCars = useSelector(selectFilteredCars)
    const currentUser = useSelector(selectCurrentUser)

    const [page, setPage] = useState(1)
    const [response, setResponse] = useState({})
    const { data, pages } = response
    const handleOnChange = (e, page) => setPage(page)

    useEffect(() => {
        fetch(BASE_URL + `?_page=${page}&_per_page=${50}`)
            .then((response) => response.json())
            .then((res) => {
                setResponse(res)
            })
        window.scrollTo({ top: 0 });

    }, [page])

    console.log(data, 'data')

    return (
        <div className={styles.allContainer}>
            {FilteredCars.length ? FilteredCars.map((car) => {

                const isSaved = Boolean(currentUser?.SavedOffers?.find(currentSavedOffer => currentSavedOffer.id === car.id))

                return <SingleCar
                    key={car.id}
                    isSaved={isSaved}
                    car={car}
                />
            }) : data?.map((car) => {

                const isSaved = Boolean(currentUser?.SavedOffers?.find(currentSavedOffer => currentSavedOffer.id === car.id))

                return <SingleCar
                    key={car.id}
                    isSaved={isSaved}
                    car={car}
                />
            })}
            <Pagination sx={{ marginTop: "25px" }} count={pages} variant="outlined" shape="rounded" size='large' color='primary' onChange={handleOnChange} />
        </div>
    )
}

export default AllPage