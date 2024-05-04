'use client'

import React, { useEffect } from "react"

import { useSelector, useDispatch } from 'react-redux'
import {
  selectCurrentUser
} from './redux/features/currentUser/currentUserSlice'
import {
  SignInToAccount
} from './redux/features/IsLoggedIn/IsLoggedInSlice'

import { getCars } from "./redux/API/autoshopAPI"
import { getUsers } from "@/app/redux/API/usersAPI";

import Menu from "./components/menu/menu"
import Main from "./components/main/main"
import FilterBar from './components/FilterBar/filterBar'

import "./global.css"

export default function Home() {

  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const state = useSelector(state => state)

  useEffect(() => {
    if (currentUser) {
      dispatch(SignInToAccount())
    }
  }, [currentUser])

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  useEffect(() => {
    dispatch(getCars())
  }, [])

  return <div className="main" >
    <Menu />
    <FilterBar />
    <Main />
  </div>
}