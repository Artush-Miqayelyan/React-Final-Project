import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from '../../API/usersAPI'

const initialState = []

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{

    },
    extraReducers: builder => {
        builder
        .addCase(getUsers.fulfilled , (state , action) => {
            return action.payload
        })
    }
})

export const {} = usersSlice.actions

export const selectUsers = (state) => state.users

export default usersSlice.reducer