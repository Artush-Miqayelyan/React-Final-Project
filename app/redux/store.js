import { configureStore } from '@reduxjs/toolkit'
import autoshopSlice from './features/autoshop/autoshopSlice'
import filteredAutoshopSlice from './features/mainFilterSlice/mainFilterSlice'
import filterPropsSlice from './features/filterProps/filterPropsSlice'
import usersReducer from './features/users/usersSlice'
import IsLoggedInSlice from './features/IsLoggedIn/IsLoggedInSlice'
import currentUserSlice from './features/currentUser/currentUserSlice'

export const store = configureStore({
    reducer: {
        autoshop: autoshopSlice,
        filteredAutoshop: filteredAutoshopSlice,
        filterProps: filterPropsSlice,
        users: usersReducer,
        IsLoggedIn: IsLoggedInSlice,
        currentUser: currentUserSlice
    }
})