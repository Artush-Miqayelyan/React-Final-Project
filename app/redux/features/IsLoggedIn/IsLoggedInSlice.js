import { Login } from '@mui/icons-material'
import { createSlice } from '@reduxjs/toolkit'

const initialState = true

export const IsLoggedInSlice = createSlice({
    name: "IsLoggedIn",
    initialState,
    reducers:{
        ExitFromAccount: (state) => {
            state = false
            return state
        },
        SignInToAccount: (state) => {
            state = true
            return state
        }
    },
})

export const { ExitFromAccount , SignInToAccount } = IsLoggedInSlice.actions

export const selectIsLoggedIn = (state) => state.IsLoggedIn

export default IsLoggedInSlice.reducer