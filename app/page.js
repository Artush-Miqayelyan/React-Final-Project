'use client'

import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCars
} from './redux/features/autoshop/autoshopSlice'
import {
  selectCurrentUser
} from './redux/features/currentUser/currentUserSlice'

import { getCars } from "./redux/API/autoshopAPI"

import Menu from "./components/menu/menu"
import Main from "./components/main/main"
import FilterBar from './components/FilterBar/filterBar'

import "./global.css"

export default function Home() {

  const dispatch = useDispatch()
  const cars = useSelector(selectCars)
  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    console.log("Current User :::: " , currentUser)
  } , )

  useEffect(() => {
    //console.log("Getting cars >>>>>>>>>>>>> ")
    dispatch(getCars())
  }, [])

  return <div className="main" >
    <Menu/>
    <FilterBar />
    <Main />
  </div>
}