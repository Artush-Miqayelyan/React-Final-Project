import { configureStore } from '@reduxjs/toolkit'
import autoshopSlice from './features/autoshop/autoshopSlice'

export const store = configureStore({
    reducer: {
        autoshop: autoshopSlice
    }
})