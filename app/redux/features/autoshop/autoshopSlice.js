import { createSlice } from '@reduxjs/toolkit'
import { getCars } from '../../API/autoshopAPI'

const initialState = []

export const autoshopSlice = createSlice({
    name: "autoshop",
    initialState,
    reducers:{

    },
    extraReducers: builder => {
        builder
        .addCase(getCars.fulfilled , (state , action) => {
            return action.payload
        })
    }
})

export const {} = autoshopSlice.actions

export const selectCars = (state) => state.autoshop

export default autoshopSlice.reducer