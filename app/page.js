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
import Menu from "./components/menu/menu"

export default function Home() {

  const dispatch = useDispatch()
  const cars = useSelector(selectCars)

  useEffect(() => {
    dispatch(getCars())
  }, [])

  return <div className="main" >
    <Menu/>
    <FilterBar />
    <Main />
  </div>

}
