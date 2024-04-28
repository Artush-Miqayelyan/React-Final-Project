
'use client'

import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCars
} from './redux/features/autoshop/autoshopSlice'
import {
  selectUsers
} from './redux/features/users/usersSlice'
import {
  selectFilteredCars
} from './redux/features/mainFilterSlice/mainFilterSlice'
import {
  selectIsLoggedIn
} from './redux/features/IsLoggedIn/IsLoggedInSlice'

import { getCars } from "./redux/API/autoshopAPI"
import { getUsers } from "./redux/API/usersAPI"

import Menu from "./components/menu/menu"
import Main from "./components/main/main"
import FilterBar from './components/FilterBar/filterBar'

import "./global.css"

export default function Home() {

  const dispatch = useDispatch()
  const cars = useSelector(selectCars)
  const filteredCarsData = useSelector(selectFilteredCars)
  const users = useSelector(selectUsers)

  useEffect(() => {
    dispatch(getCars())
  }, [])

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return <div className="main" >
    <Menu/>
    <FilterBar />
    <Main />
  </div>
}
