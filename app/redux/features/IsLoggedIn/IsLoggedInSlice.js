import { createSlice } from '@reduxjs/toolkit'

const initialState = true

export const IsLoggedInSlice = createSlice({
    name: "IsLoggedIn",
    initialState,
    reducers:{
        ExitFromAccount: (state) => {
            return false
        },
        SignInToAccount: (state) => {
            return true
        }
    },
})

export const { ExitFromAccount , SignInToAccount } = IsLoggedInSlice.actions

export const selectIsLoggedIn = (state) => state.IsLoggedIn

export default IsLoggedInSlice.reducer