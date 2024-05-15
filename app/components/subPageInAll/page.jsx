"use client"
import { useSelector } from "react-redux"
import styles from "./page.module.css"
import { selectCars } from "@/app/redux/features/autoshop/autoshopSlice"
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import SingleCar from "../allPage/singlCar/singlCar";


function SubPageInAll({priorityName}) {
    const cars = useSelector(selectCars).filter(car => car.priority.includes(priorityName));
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setdata] = useState(cars)
    
    const handleOnChange = (e, p) => setCurrentPage(p)
    const perPage = 50
    const countPages = Math.ceil(data.length / perPage)
    const firstIndex = (currentPage - 1) * perPage
    const lastIndex = firstIndex + perPage
    const currentData = data.slice(firstIndex, lastIndex)

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [currentPage])

    return (
        <div className={styles.allContainer}>
            {currentData?.map(car => <SingleCar
                key={car.id}
                car={car}
            />)}
            <Pagination sx={{ marginTop: "25px" }} page={currentPage} count={countPages} variant="outlined" shape="rounded" size='large' color='primary' onChange={handleOnChange} />
        </div>
    )
}

export default SubPageInAll