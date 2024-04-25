
'use client'

import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCars
} from './redux/features/autoshop/autoshopSlice'
import { getCars } from "./redux/API/autoshopAPI"
import Main from "./components/main/main"
import FilterBar from './components/FilterBar/filterBar'
import "./global.css"
import { Filter } from "@mui/icons-material"

import {
  selectFilteredCars
} from './redux/features/mainFilterSlice/mainFilterSlice'


export default function Home() {

  const dispatch = useDispatch()
  const cars = useSelector(selectCars)
  const filteredCarsData = useSelector(selectFilteredCars)

  useEffect(() => {
    console.log("FILTERED :::: " , filteredCarsData)
  } , [filteredCarsData])

  useEffect(() => {
    dispatch(getCars())
  }, [])

  return <div className="main" >
    <FilterBar />
    <Main />
  </div>
}
