'use client'

import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCars
} from './redux/features/autoshop/autoshopSlice'
import { getCars } from "./redux/API/autoshopAPI"
import Header from "./components/header/header"
import FilterBar from './components/FilterBar/filterBar'
import "./global.css"

export default function Home() {

  const dispatch = useDispatch()
  const cars = useSelector(selectCars)

  useEffect(() => {
    dispatch(getCars())
  }, [])

  return (
    <div className="main">
      <Header />
      <FilterBar />
    </div>
  )
}
