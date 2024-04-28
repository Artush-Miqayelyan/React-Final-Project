import { createAsyncThunk } from '@reduxjs/toolkit'

const Url = 'http://localhost:4000/users'

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        return await fetch(Url)
            .then(res => res.json())
            .then(res => res)
    },
)