
'use client'

import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCars
} from './redux/features/autoshop/autoshopSlice'
import { getCars } from "./redux/API/autoshopAPI"
import Header from "./components/header/header"
import Main from "./components/main/main"
import FilterBar from './components/FilterBar/filterBar'
import "./global.css"
import { Filter } from "@mui/icons-material"

export default function Home() {

  const dispatch = useDispatch()
  const cars = useSelector(selectCars)

  useEffect(() => {
    dispatch(getCars())
  }, [])

  console.log('LOG ::: CARS', cars)

  return <div className="main" id="main">
      <Header/>
      <FilterBar />
      <Main />
    </div>
  
}
