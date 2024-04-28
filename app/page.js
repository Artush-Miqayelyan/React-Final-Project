
'use client'

import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCars
} from './redux/features/autoshop/autoshopSlice'
import {
  selectUsers
} from './redux/features/users/usersSlice'
import { getCars } from "./redux/API/autoshopAPI"
import { getUsers } from "./redux/API/usersAPI"
import Main from "./components/main/main"

import FilterBar from './components/FilterBar/filterBar'
import "./global.css"
import { Filter } from "@mui/icons-material"

import {
  selectFilteredCars
} from './redux/features/mainFilterSlice/mainFilterSlice'

import Menu from "./components/menu/menu"

export default function Home() {

  const dispatch = useDispatch()
  const cars = useSelector(selectCars)
  const filteredCarsData = useSelector(selectFilteredCars)

  const users = useSelector(selectUsers)

  // useEffect(() => {
  //   console.log("FILTERED :::: ", filteredCarsData)
  // }, [filteredCarsData])

  useEffect(() => {
    dispatch(getCars())
  }, [])

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  // useEffect(() => {
  //   console.log("USERS ::: " , users)
  // } , [users])

  return <div className="main" >
    <Menu/>
    <FilterBar />
    <Main />
  </div>
}
