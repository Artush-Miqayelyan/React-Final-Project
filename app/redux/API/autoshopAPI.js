import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const Url = 'http://localhost:3000/cars'

export const getCars = createAsyncThunk(
    'autoshop/getCars',
    async () => {
        return await fetch(Url)
            .then(res => res.json())
            .then(res => res)
    },
)