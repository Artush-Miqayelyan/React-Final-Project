import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

export const CurrentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return action.payload
        }
    }
})

export const { setCurrentUser } = CurrentUserSlice.actions

export const selectCurrentUser = (state) => state.currentUser

export default CurrentUserSlice.reducer