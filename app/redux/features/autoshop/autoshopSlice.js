import { createSlice } from '@reduxjs/toolkit'
import { getCars } from '../../API/autoshopAPI'

const initialState = {
    isLoading: false,
    cars: []
}

export const autoshopSlice = createSlice({
    name: "autoshop",
    initialState,
    reducers:{

    },
    extraReducers: builder => {
        builder
        .addCase(getCars.fulfilled , (state , action) => {
            state.cars.push(...action.payload)
        })
    } 
})

export const {} = autoshopSlice.actions

export const selectCars = (state) => state.autoshop.cars

export default autoshopSlice.reducer